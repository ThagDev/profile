"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpandableContentProps {
  excerpt: string
  fullContent: string
  maxExcerptLength?: number
  isInsideDescription?: boolean // New prop to handle different rendering
}

export function ExpandableContent({
  excerpt,
  fullContent,
  maxExcerptLength = 150,
  isInsideDescription = false,
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayExcerpt = excerpt.length > maxExcerptLength 
    ? excerpt.substring(0, maxExcerptLength) + "..." 
    : excerpt;

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const ToggleButton = () => (
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
  );

  // Render for inside description (inline)
  if (isInsideDescription) {
    return (
      <>
        {isExpanded 
          ? <span dangerouslySetInnerHTML={{ __html: fullContent }} /> 
          : <span>{displayExcerpt}</span>
        }
        <ToggleButton />
      </>
    );
  }

  // Render for standalone use (block)
  return (
    <div className="space-y-4">
      {isExpanded ? (
        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: fullContent }}
        />
      ) : (
        <p>{displayExcerpt}</p>
      )}
      <ToggleButton />
    </div>
  );
}
