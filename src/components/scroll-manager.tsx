"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Component để xử lý scroll behavior cho toàn bộ app
 * - Scroll về đầu trang khi reload
 * - Scroll về đầu trang khi chuyển trang
 * - Sử dụng useLayoutEffect để tránh layout shift
 */
export function ScrollManager() {
  const pathname = usePathname();

  // Chỉ sử dụng 1 useLayoutEffect thay vì 2 useEffect
  useLayoutEffect(() => {
    // Scroll về đầu trang ngay lập tức khi pathname thay đổi
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Vô hiệu hóa scroll restoration để có full control
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, [pathname]);

  // Component này không render gì cả, chỉ xử lý logic
  return null;
}
