import { useCallback } from "react";
import useWindowEvent from "./useWindowEvent";

const useOnResize = (cb: (size: { width: number; height: number }) => void) => {
  const handleResize = useCallback(
    function (this: Window) {
      cb({ width: this.innerWidth, height: this.innerHeight });
    },
    [cb]
  );

  useWindowEvent("resize", handleResize);
};

export default useOnResize;
