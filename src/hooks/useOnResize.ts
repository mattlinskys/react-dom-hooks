import useWindowEvent from "./useWindowEvent";

const useOnResize = (cb: (size: { width: number; height: number }) => void) =>
  useWindowEvent("resize", function () {
    cb({ width: window.innerWidth, height: window.innerHeight });
  });

export default useOnResize;
