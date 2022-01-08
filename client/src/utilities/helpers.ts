import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: NodeJS.Timeout | null;
  return (...args: any[]) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
