"use client"

import { useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function usePageTitle(title: string) {
  const pathname = usePathname()
  const previousTitleRef = useRef<string | null>(null)

  // Use useLayoutEffect for DOM updates to avoid visual flicker
  useLayoutEffect(() => {
    // Skip if title hasn't changed
    if (previousTitleRef.current === title) return

    // Update document title synchronously
    if (typeof document !== "undefined") {
      const fullTitle = `${title} | ThagDev`
      document.title = fullTitle
    }

    // Store the current title for comparison on next render
    previousTitleRef.current = title
  }, [title, pathname])

  return null
}
