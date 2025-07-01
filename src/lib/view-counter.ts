"use server"

// Since we don't have a database, we'll use a server-side in-memory store
// In a production app, this would be stored in a database
const projectViews: Record<number, number> = {}
const blogViews: Record<number, number> = {}

export async function incrementProjectViews(id: number): Promise<number> {
  if (!projectViews[id]) {
    projectViews[id] = 0
  }

  projectViews[id]++
  return projectViews[id]
}

export async function getProjectViews(id: number): Promise<number> {
  return projectViews[id] || 0
}

export async function incrementBlogViews(id: number): Promise<number> {
  if (!blogViews[id]) {
    blogViews[id] = 0
  }

  blogViews[id]++
  return blogViews[id]
}

export async function getBlogViews(id: number): Promise<number> {
  return blogViews[id] || 0
}

// For demo purposes, let's pre-populate with some views
// In a real app, this would come from a database
export async function initializeViewCounts() {
  // Initialize project views with some random data
  for (let i = 1; i <= 6; i++) {
    projectViews[i] = Math.floor(Math.random() * 100) + 50
  }

  // Initialize blog views with some random data
  for (let i = 1; i <= 6; i++) {
    blogViews[i] = Math.floor(Math.random() * 200) + 100
  }
}

// Initialize the view counts when the server starts
initializeViewCounts()
