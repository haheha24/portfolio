"use client";

import { useMemo, useState } from "react";
import _ from "lodash/debounce";
import useMediaQuery from "./useMediaQuery";

const useElementVisibility = <T extends HTMLElement | null>(
  breakpoint: number,
  ref: React.MutableRefObject<T>
): { isElementVisible: boolean; isDesktop: boolean } => {
  const windowDimensions = useMediaQuery();
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  useMemo(() => {
    const handleElementScroll = _(() => {
      if (ref.current) {
        if (window.scrollY < ref.current.getBoundingClientRect().height - 1) {
          setIsElementVisible(true);
        }
        if (window.scrollY > ref.current.getBoundingClientRect().height - 1) {
          setIsElementVisible(false);
        }
      }
    }, 100);
    const handleDesktop = (): (() => void) => {
      if (windowDimensions.width! > breakpoint) {
        setIsDesktop(true);
        window.addEventListener("scroll", handleElementScroll, {
          passive: true,
        });
        return () => window.removeEventListener("scroll", handleElementScroll);
      }
      setIsDesktop(false);
      return () => window.removeEventListener("scroll", handleElementScroll);
    };
    handleDesktop();
  }, [windowDimensions, isElementVisible, isDesktop]);

  return {
    isElementVisible,
    isDesktop,
  };
};

export default useElementVisibility;
