"use client";

import { useMemo, useState, useEffect } from "react";
import _ from "lodash/debounce";

const useElementVisibility = <T extends HTMLElement | null>(
  breakpoint: number,
  ref: React.MutableRefObject<T>,
  offset: number
): { isElementVisible: boolean; isDesktop: boolean } => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const getWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    getWindowWidth(); //initialize the state with window width once on client side
    window.addEventListener("resize", _(getWindowWidth, 500));
    return window.removeEventListener("resize", getWindowWidth);
  }, []);

  const [isElementVisible, setIsElementVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  useMemo(() => {
    const handleElementScroll = _(() => {
      if (ref.current) {
        if (
          window.scrollY <
          ref.current.getBoundingClientRect().height - offset
        ) {
          setIsElementVisible(true);
        }
        if (
          window.scrollY >
          ref.current.getBoundingClientRect().height - offset
        ) {
          setIsElementVisible(false);
        }
      }
    }, 100);
    const handleDesktop = (): (() => void) => {
      if (windowWidth > breakpoint) {
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
  }, [windowWidth, isElementVisible, isDesktop]);

  return {
    isElementVisible,
    isDesktop,
  };
};

export default useElementVisibility;
