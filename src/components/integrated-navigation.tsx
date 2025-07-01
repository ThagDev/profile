"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegratedNavigationProps {
  className?: string;
  backLabel?: string;
  backDestination?: string;
  variant?: "default" | "minimal" | "elegant";
  showBreadcrumbs?: boolean;
  showBackButton?: boolean;
}

export function IntegratedNavigation({
  className,
  backLabel = "Back",
  backDestination = "/",
  variant = "default",
  showBreadcrumbs = true,
  showBackButton = true,
}: IntegratedNavigationProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Only show if we have something to display
  if (!showBackButton && !showBreadcrumbs) return null;

  try {
    // Use provided back destination or default to home
    const backPath = backDestination;    // Determine the label - use provided label or default
    const backButtonLabel = backLabel;

    // Breadcrumbs are disabled since we removed navigation context
    const breadcrumbs: Array<{ label: string; href: string }> = [];
    const hasBreadcrumbs = false;

    const backVariants = {
      default:
        "flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200",
      minimal:
        "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
      elegant:
        "group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200",
    };

    return (
      <div className={cn("flex flex-col gap-2 my-4", className)}>
        {/* Back button */}
        {showBackButton && (
          <div className="flex items-center">            {variant === "elegant" ? (
              <Link href={backPath} className={backVariants[variant]}>
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
                  <span>{backButtonLabel}</span>
                </m.div>
              </Link>
            ) : (
              <Link href={backPath} className={backVariants[variant]}>
                <ChevronLeft className="h-4 w-4" />
                <span>{backButtonLabel}</span>
              </Link>
            )}
          </div>
        )}

        {/* Breadcrumbs */}
        {showBreadcrumbs && hasBreadcrumbs && (
          <nav
            className={cn(
              "flex items-center space-x-1 text-sm overflow-x-auto pb-1",
              showBackButton ? "ml-1" : ""
            )}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((item, index) => (
              <div
                key={item?.href || index}
                className="flex items-center whitespace-nowrap"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground flex-shrink-0" />
                )}

                <Link
                  href={item?.href || "#"}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    index === breadcrumbs.length - 1 &&
                      "text-foreground font-medium pointer-events-none"
                  )}
                  aria-current={
                    index === breadcrumbs.length - 1 ? "page" : undefined
                  }
                >
                  {item?.label || "Page"}
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    );
  } catch (error) {
    // If anything goes wrong, log the error and return a simple back button
    console.error("Error rendering IntegratedNavigation:", error);
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
