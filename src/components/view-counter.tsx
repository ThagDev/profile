"use client"

import { useState, useCallback, useLayoutEffect } from "react"
import { Eye } from "lucide-react"

interface ViewCounterProps {
  id: number
  type: "blog" | "project"
  increment?: boolean
  className?: string
}

export function ViewCounter({ id, type, increment = false, className = "" }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchViews = useCallback(async () => {
    setIsLoading(true)
    try {
      const cacheKey = `views_${type}_${id}`
      
      // Check cache first
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        const { views: cachedViews, timestamp } = JSON.parse(cached)
        // Use cache if less than 5 minutes old
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          setViews(cachedViews)
          setIsLoading(false)
          return
        }
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Mock view count based on ID and type
      const baseViews = type === "blog" ? 1000 : 500
      const viewCount = baseViews + (id * 123) + (increment ? 1 : 0)
      
      // Cache the result
      localStorage.setItem(cacheKey, JSON.stringify({
        views: viewCount,
        timestamp: Date.now()
      }))
      
      setViews(viewCount)
    } catch (error) {
      console.error("Failed to fetch views:", error)
      setViews(0)
    } finally {
      setIsLoading(false)
    }
  }, [id, type, increment])

  // Use useLayoutEffect to avoid layout shift and fetch immediately
  useLayoutEffect(() => {
    fetchViews()
  }, [fetchViews])

  return (
    <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
      <Eye className="h-4 w-4" />
      {isLoading ? (
        <span className="animate-pulse w-12 h-4 bg-muted rounded"></span>
      ) : (
        <span>{views?.toLocaleString() || 0} views</span>
      )}
    </div>
  )
}
