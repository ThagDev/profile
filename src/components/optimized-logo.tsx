"use client";

import Image from "next/image";
import { memo } from "react";

interface OptimizedLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedLogo = memo(({ 
  size = 43, 
  className = "rounded-full object-cover",
  priority = false 
}: OptimizedLogoProps) => {
  return (
    <Image
      src="/logo.jpg"
      width={size}
      height={size}
      alt="ThangDev Logo"
      className={className}
      priority={priority}
      sizes={`${size}px`}
      quality={85}
      style={{
        width: size,
        height: size,
        maxWidth: '100%',
      }}
    />
  );
});

OptimizedLogo.displayName = "OptimizedLogo";

export default OptimizedLogo;
