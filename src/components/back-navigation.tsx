"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/context/navigation-context";
// import { usePathname } from "next/navigation";

interface BackNavigationProps {
  destination?: string;
  label?: string;
  className?: string;
  variant?: "default" | "minimal" | "elegant";
  fallbackDestination?: string;
}

export function BackNavigation({
  destination,
  label,
  className,
  variant = "default",
  fallbackDestination = "/",
}: BackNavigationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigation();
  //   const pathname = usePathname();

  try {
    // Safely get previous path
    let previousPath = "/";
    try {
      if (navigation?.getPreviousPath) {
        previousPath = navigation.getPreviousPath();
      }
    } catch (e) {
      console.error("Error getting previous path:", e);
      previousPath = "/";
    }

    // Determine the back destination - use provided destination, or get from history, or use fallback
    const backDestination = destination || previousPath || fallbackDestination;

    // Safely get page title
    let pageTitle = "";
    try {
      if (navigation?.getPageTitle) {
        pageTitle = navigation.getPageTitle(backDestination);
      }
    } catch (e) {
      console.error("Error getting page title:", e);
      pageTitle = "Previous Page";
    }

    // Determine the label - use provided label, or generate from destination
    const backLabel =
      label || (backDestination === "/" ? "Home" : `Back to ${pageTitle}`);

    const variants = {
      default:
        "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200",
      minimal:
        "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
      elegant:
        "group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200",
    };

    return (
      <div className={cn("my-4", className)}>
        {" "}
        {variant === "elegant" ? (
          <Link href={backDestination} className={variants[variant]}>
            <m.div
              className="relative flex items-center"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <m.div
                className="absolute h-px bg-primary"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ bottom: -2 }}
              />
              <m.div
                initial={{ x: 0 }}
                animate={{ x: isHovered ? -3 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronLeft className="h-4 w-4 text-primary" />
              </m.div>
              <span>{backLabel}</span>
            </m.div>
          </Link>
        ) : (
          <Link href={backDestination} className={variants[variant]}>
            <ChevronLeft className="h-4 w-4" />
            <span>{backLabel}</span>
          </Link>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering BackNavigation:", error);
    return (
      <div className={cn("my-4", className)}>
        <Link
          href="/"
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }
}
