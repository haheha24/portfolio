import { useState, useEffect, useCallback } from "react";

const _ = require("lodash/throttle");

interface IwindowDimension {
  height: number;
  width: number;
}

const useMediaQuery = () => {
  const [windowDimension, setWindowDimension] = useState<IwindowDimension>({
    height: 0,
    width: 0,
  });
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
  const windowCallBack = useCallback(getWindowDimension, [windowDimension]);

  useEffect(() => {
    window.addEventListener("resize", _(windowCallBack, 1000));
    return window.addEventListener("resize", _(windowCallBack, 1000));
  }, []);

  return windowDimension;
};

export default useMediaQuery;
