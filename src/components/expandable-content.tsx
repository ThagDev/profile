"use client";

import { useState, memo, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableContentProps {
  excerpt: string;
  fullContent: string;
  maxExcerptLength?: number;
  isInsideDescription?: boolean;
}

export const ExpandableContent = memo(
  ({
    excerpt,
    fullContent,
    maxExcerptLength = 150,
    isInsideDescription = false,
  }: ExpandableContentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Memoize the truncated excerpt
    const displayExcerpt = useMemo(
      () =>
        excerpt.length > maxExcerptLength
          ? excerpt.substring(0, maxExcerptLength) + "..."
          : excerpt,
      [excerpt, maxExcerptLength]
    );

    const toggleExpanded = useCallback(
      () => setIsExpanded(!isExpanded),
      [isExpanded]
    );

    const ToggleButton = useCallback(
      () => (
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 px-0 text-primary mt-2"
          onClick={toggleExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Read More
            </>
          )}
        </Button>
      ),
      [isExpanded, toggleExpanded]
    );

    // Render for inside description (inline)
    if (isInsideDescription) {
      return (
        <>
          {isExpanded ? (
            <span>{fullContent}</span>
          ) : (
            <span>{displayExcerpt}</span>
          )}
          <ToggleButton />
        </>
      );
    }

    // Render for standalone use (block)
    return (
      <div className="space-y-4">
        {isExpanded ? (
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {fullContent}
          </div>
        ) : (
          <p>{displayExcerpt}</p>
        )}
        <ToggleButton />
      </div>
    );
  }
);

ExpandableContent.displayName = "ExpandableContent";
