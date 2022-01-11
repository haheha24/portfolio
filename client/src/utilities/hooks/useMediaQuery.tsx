import { useState, useEffect } from "react";

const _ = require("lodash/debounce");

interface IwindowDimension {
  height: number;
  width: number;
}

const useMediaQuery = () => {
  const [windowDimension, setWindowDimension] = useState<IwindowDimension>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const getWindowDimension = () => {
      let { innerHeight: height, innerWidth: width } = window;
      setWindowDimension({ height, width });
      let time = Date.now();
      let newTime = time + 1000 - Date.now();
      if (newTime < 0) {
        time = Date.now();
      }
      return windowDimension;
    };
    window.addEventListener("resize", _(getWindowDimension, 500));
    return window.removeEventListener("resize", _(getWindowDimension, 500));
  }, [windowDimension]);

  return windowDimension;
};

export default useMediaQuery;
