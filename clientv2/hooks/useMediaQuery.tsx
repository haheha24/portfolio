import { useState, useEffect } from "react";

const _ = require("lodash/debounce");

interface IwindowDimension {
  height: number | undefined;
  width: number | undefined;
}

const useMediaQuery = () => {
  //fields must not reference window as Next JS will compile on server side, therefore no window API
  const [windowDimension, setWindowDimension] = useState<IwindowDimension>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const getWindowDimension = () => {
      if (typeof window !== undefined) {
        let { innerHeight: height, innerWidth: width } = window;
        setWindowDimension({ height, width });
      }
    };
    window.addEventListener("resize", _(getWindowDimension, 500));
    getWindowDimension();
    return window.removeEventListener("resize", _(getWindowDimension, 500));
  }, []);

  return windowDimension;
};

export default useMediaQuery;
