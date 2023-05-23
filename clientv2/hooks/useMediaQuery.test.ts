import useMediaQuery from "./useMediaQuery";
import { act, renderHook } from "test-utils";

/**
 * JSDom doesn't have a method for window.resizeTo() so defining the values properties in innerX in window hacks around it.
 * This function would not resize the actual window in the browser DOM but in
 * JSDom it mocks it by grabbing redefining the window properties innerWidth and innerHeight.
 * These are the same values of what window.resizeTo() would mutate.
 */
/* const customResize = (width: number, height: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: height,
  }); 
};*/

const { rerender, result } = renderHook(useMediaQuery);

describe("useMediaQuery hook tests", () => {
  it("get the initial width and height of the window", () => {
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });
  it("resize the window and call useMediaQuery", () => {
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
    act(() => {
      /* customResize(860, 768); */
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 860,
      });
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 768,
      });
      window.dispatchEvent(new Event("resize"));
      /* rerender(); */
    });
    expect(result.current.width).toBe(860);
    expect(result.current.height).toBe(768);
  });
});
