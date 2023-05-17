"use client";

import { useMemo, useRef, useState } from "react";
import _ from "lodash/debounce";
import useMediaQuery from "./useMediaQuery";

const useHandleNav = (breakpoint: number) => {
  const navRef = useRef<HTMLUListElement>(null);
  const windowDimensions = useMediaQuery();
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  useMemo(() => {
    const handleScroll = _(() => {
      if (navRef.current) {
        if (
          window.scrollY <
          navRef.current.getBoundingClientRect().height - 1
        ) {
          setIsElementVisible(true);
        }
        if (
          window.scrollY >
          navRef.current.getBoundingClientRect().height - 1
        ) {
          setIsElementVisible(false);
        }
      }
    }, 100);
    const featureHandler = (): (() => void) => {
      //track window dimension and set isDesktop. This prevents an unncessary eventlistener in mobile view.
      if (windowDimensions.width! > breakpoint) {
        //callback to set the state of isElementVisible. If the bottom of navUlRef is greater than the scrollY, set true else false
        setIsDesktop(true);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }
      setIsDesktop(false);
      return () => window.removeEventListener("scroll", handleScroll);
    };
    featureHandler();
  }, [windowDimensions, isElementVisible, isDesktop]);

  return {
    isElementVisible,
    isDesktop,
    navRef,
  };
};

export default useHandleNav;
