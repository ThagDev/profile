/**
 * Suppress non-critical browser warnings and errors
 */

// Type for Chrome runtime
interface ChromeRuntime {
  runtime?: {
    lastError?: Error | null;
  };
}

// Suppress runtime.lastError from browser extensions
if (typeof window !== 'undefined') {
  // Override chrome.runtime if it exists (for extension errors)
  const globalChrome = (window as unknown as { chrome?: ChromeRuntime }).chrome;
  if (globalChrome && globalChrome.runtime) {
    Object.defineProperty(globalChrome.runtime, 'lastError', {
      get: () => {
        // Clear the error silently
        return null;
      },
      configurable: true
    });
  }

  // Suppress console errors from extensions
  const originalError = console.error;
  console.error = (...args) => {
    const message = String(args[0] || '');
    
    // Skip Chrome extension related errors
    if (
      message.includes('runtime.lastError') || 
      message.includes('Could not establish connection') ||
      message.includes('Receiving end does not exist') ||
      message.includes('Extension context invalidated')
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  // Suppress React DevTools warning in production
  if (process.env.NODE_ENV === 'production') {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const message = String(args[0] || '');
      if (message.includes('React DevTools')) {
        return;
      }
      originalWarn.apply(console, args);
    };
  }

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const message = String(event.reason?.message || event.reason || '');
    
    // Suppress extension-related promise rejections
    if (
      message.includes('runtime.lastError') ||
      message.includes('Could not establish connection') ||
      message.includes('Extension context invalidated')
    ) {
      event.preventDefault();
      return;
    }
    
    // Log other unhandled rejections in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Unhandled promise rejection:', event.reason);
    }
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    const message = String(event.error?.message || event.message || '');
    
    // Suppress extension-related errors
    if (
      message.includes('runtime.lastError') ||
      message.includes('Could not establish connection')
    ) {
      event.preventDefault();
      return;
    }
  });
}

export {};
