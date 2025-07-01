"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type NavigationHistoryItem = {
  path: string;
  title: string;
  timestamp: number;
  // Add breadcrumb information
  breadcrumb?: {
    parent?: string; // Parent path for breadcrumb
    isHidden?: boolean; // Whether to hide this page in breadcrumbs
  };
};

type BreadcrumbItem = {
  label: string;
  href: string;
};

type NavigationContextType = {
  history: NavigationHistoryItem[];
  getPreviousPath: () => string;
  getPageTitle: (path: string) => string;
  addPathTitle: (path: string, title: string) => void;
  // New breadcrumb methods
  getBreadcrumbPath: (path: string) => BreadcrumbItem[];
  setPathBreadcrumb: (
    path: string,
    parentPath?: string,
    isHidden?: boolean
  ) => void;
  getCurrentBreadcrumbs: () => BreadcrumbItem[];
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

const MAX_HISTORY_LENGTH = 20;

// Default context value to avoid issues with conditional hook calls
const defaultNavigationContext: NavigationContextType = {
  history: [],
  getPreviousPath: () => "/",
  getPageTitle: () => "Page",
  addPathTitle: () => {},
  getBreadcrumbPath: () => [{ label: "Home", href: "/" }],
  setPathBreadcrumb: () => {},
  getCurrentBreadcrumbs: () => [{ label: "Home", href: "/" }],
};

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [history, setHistory] = useState<NavigationHistoryItem[]>(() => {
    // Initialize with sessionStorage data immediately
    if (typeof window !== 'undefined') {
      try {
        const savedHistory = sessionStorage.getItem("navigationHistory");
        return savedHistory ? JSON.parse(savedHistory) : [];
      } catch (error) {
        console.error("Failed to load navigation history:", error);
        return [];
      }
    }
    return [];
  });

  // Use ref to track previous pathname to avoid unnecessary updates
  const prevPathnameRef = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  // Optimized save function with debouncing
  const saveHistoryToStorage = useCallback((historyToSave: NavigationHistoryItem[]) => {
    if (typeof window === 'undefined') return;
    
    try {
      sessionStorage.setItem(
        "navigationHistory",
        JSON.stringify(historyToSave)
      );
    } catch (error) {
      console.error("Failed to save navigation history:", error);
    }
  }, []);

  // Get the document title with better caching
  const getDocumentTitle = useCallback((): string => {
    if (typeof document !== "undefined") {
      return document.title || pathname || "Unknown Page";
    }
    return pathname || "Unknown Page";
  }, [pathname]);

  // Optimized update history function
  const updateHistory = useCallback((newPath: string) => {
    // Skip if it's the same path as previous
    if (prevPathnameRef.current === newPath) return;
    
    setHistory((prevHistory) => {
      // Don't add the same path twice in a row
      if (
        prevHistory.length > 0 &&
        prevHistory[prevHistory.length - 1].path === newPath
      ) {
        return prevHistory;
      }

      // Check if this path already exists in history
      const existingItemIndex = prevHistory.findIndex(
        (item) => item.path === newPath
      );

      // Create new history array
      let newHistory: NavigationHistoryItem[];

      if (existingItemIndex >= 0) {
        // If path exists, move it to the end with updated timestamp
        const existingItem = prevHistory[existingItemIndex];
        newHistory = [
          ...prevHistory.slice(0, existingItemIndex),
          ...prevHistory.slice(existingItemIndex + 1),
          {
            ...existingItem,
            timestamp: Date.now(),
          },
        ];
      } else {
        // If path doesn't exist, add it to the end
        newHistory = [
          ...prevHistory,
          {
            path: newPath,
            title: getDocumentTitle(),
            timestamp: Date.now(),
            breadcrumb: { parent: "/" },
          },
        ];
      }

      // Limit history length
      if (newHistory.length > MAX_HISTORY_LENGTH) {
        newHistory.shift();
      }

      // Save to sessionStorage
      saveHistoryToStorage(newHistory);
      
      // Update the ref
      prevPathnameRef.current = newPath;

      return newHistory;
    });
  }, [getDocumentTitle, saveHistoryToStorage]);

  // Handle pathname changes without useEffect - using useMemo for synchronous update
  useMemo(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (pathname) {
        updateHistory(pathname);
      }
      return;
    }
    
    if (pathname && pathname !== prevPathnameRef.current) {
      updateHistory(pathname);
    }
  }, [pathname, updateHistory]);

  // Get previous path, defaulting to homepage if none exists
  const getPreviousPath = useCallback((): string => {
    if (history.length < 2) return "/";

    // Get the current path's index
    const currentIndex = history.findIndex((item) => item.path === pathname);

    // If current path is found and there's a previous path, return it
    if (currentIndex > 0) {
      return history[currentIndex - 1].path;
    }

    // Otherwise return the second-to-last path in history
    return history[history.length - 2]?.path || "/";
  }, [history, pathname]);

  // Format a path to a readable title
  const formatPathToTitle = useCallback((path: string): string => {
    if (path === "/") return "Home";

    // Remove leading slash and split by remaining slashes
    const parts = path.substring(1).split("/");

    // Get the last meaningful part
    const lastPart =
      parts[parts.length - 1] || parts[parts.length - 2] || "Page";

    // Convert kebab-case to Title Case
    return lastPart
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, []);

  // Get page title for a given path
  const getPageTitle = useCallback(
    (path: string): string => {
      const item = history.find((item) => item.path === path);
      return item?.title || formatPathToTitle(path);
    },
    [history, formatPathToTitle]
  );
  // Add or update a page title for a specific path
  const addPathTitle = useCallback(
    (path: string, title: string) => {
      setHistory((prevHistory) => {
        // Find the item with the matching path
        const existingItem = prevHistory.find((item) => item.path === path);

        // If the item exists and the title is the same, don't update state
        if (existingItem && existingItem.title === title) {
          return prevHistory;
        }

        // If the path doesn't exist in history yet, don't modify the history
        // (it will be added naturally when the user navigates to that page)
        if (!existingItem) {
          return prevHistory;
        }

        // Update the title
        const newHistory = prevHistory.map((item) =>
          item.path === path ? { ...item, title } : item
        );

        // Save to storage
        saveHistoryToStorage(newHistory);

        return newHistory;
      });
    },
    [saveHistoryToStorage]
  );

  // Set breadcrumb information for a path
  const setPathBreadcrumb = useCallback(
    (path: string, parentPath?: string, isHidden?: boolean) => {
      setHistory((prevHistory) => {
        // Find the item with the matching path
        const existingItem = prevHistory.find((item) => item.path === path);

        // If the path doesn't exist in history, don't modify
        if (!existingItem) return prevHistory;

        // Create updated breadcrumb info
        const breadcrumb = {
          ...existingItem.breadcrumb,
          ...(parentPath !== undefined ? { parent: parentPath } : {}),
          ...(isHidden !== undefined ? { isHidden } : {}),
        };

        // Check if breadcrumb info has actually changed
        if (
          JSON.stringify(existingItem.breadcrumb) === JSON.stringify(breadcrumb)
        ) {
          return prevHistory;
        }

        // Update the history
        const newHistory = prevHistory.map((item) =>
          item.path === path ? { ...item, breadcrumb } : item
        );

        // Save to storage
        saveHistoryToStorage(newHistory);

        return newHistory;
      });
    },
    [saveHistoryToStorage]
  );

  // Get breadcrumb path for a specific path
  const getBreadcrumbPath = useCallback(
    (path: string): BreadcrumbItem[] => {
      try {
        if (!path || path === "/") return [{ label: "Home", href: "/" }];
        if (!history || !Array.isArray(history))
          return [{ label: "Home", href: "/" }];

        const breadcrumbs: BreadcrumbItem[] = [];
        let currentPath = path;
        let maxDepth = 10; // Prevent infinite loops

        while (currentPath && currentPath !== "/" && maxDepth > 0) {
          const item = history.find((item) => item?.path === currentPath);

          if (!item || item.breadcrumb?.isHidden) {
            // Skip hidden items
            if (item?.breadcrumb?.parent) {
              currentPath = item.breadcrumb.parent;
              continue;
            }
            break;
          }

          // Add this item to breadcrumbs (at the beginning)
          breadcrumbs.unshift({
            label: item.title || formatPathToTitle(currentPath),
            href: currentPath,
          });

          // Move to parent
          if (item.breadcrumb?.parent) {
            currentPath = item.breadcrumb.parent;
          } else {
            // If no explicit parent, try to infer from path
            const segments = currentPath.split("/").filter(Boolean);
            if (segments.length <= 1) {
              // We've reached the top level
              break;
            }
            currentPath = "/" + segments.slice(0, -1).join("/");
          }

          maxDepth--;
        }

        // Always add home at the beginning if not already there
        if (breadcrumbs.length === 0 || breadcrumbs[0]?.href !== "/") {
          breadcrumbs.unshift({ label: "Home", href: "/" });
        }

        return breadcrumbs;
      } catch (error) {
        console.error("Error generating breadcrumb path:", error);
        return [{ label: "Home", href: "/" }];
      }
    },
    [history, formatPathToTitle]
  );

  // Get breadcrumbs for current path
  const getCurrentBreadcrumbs = useCallback((): BreadcrumbItem[] => {
    try {
      if (!pathname) return [{ label: "Home", href: "/" }];
      return getBreadcrumbPath(pathname);
    } catch (error) {
      console.error("Error getting breadcrumbs:", error);
      return [{ label: "Home", href: "/" }];
    }
  }, [pathname, getBreadcrumbPath]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      history,
      getPreviousPath,
      getPageTitle,
      addPathTitle,
      getBreadcrumbPath,
      setPathBreadcrumb,
      getCurrentBreadcrumbs,
    }),
    [
      history,
      getPreviousPath,
      getPageTitle,
      addPathTitle,
      getBreadcrumbPath,
      setPathBreadcrumb,
      getCurrentBreadcrumbs,
    ]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  return context || defaultNavigationContext;
}
