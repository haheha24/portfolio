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
      return windowDimension;
    };
    window.addEventListener("resize", _(getWindowDimension, 500));
    return window.removeEventListener("resize", _(getWindowDimension, 500));
  }, [windowDimension]);

  return windowDimension;
};

export default useMediaQuery;
