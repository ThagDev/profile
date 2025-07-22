"use client";

import { ThemeProvider } from "next-themes";
import { MotionProvider } from "./framer-animations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </MotionProvider>
  );
}
