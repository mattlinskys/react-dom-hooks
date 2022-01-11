import { MutableRefObject, DependencyList, useEffect } from "react";

const useResizeObserver = (
  cb: ResizeObserverCallback,
  ref: MutableRefObject<HTMLElement | null>,
  deps?: DependencyList
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(cb);

    if (ref.current) {
      resizeObserver.observe(ref.current, {});
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, deps);
};

export default useResizeObserver;
