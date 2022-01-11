import { MutableRefObject, useEffect } from "react";

const useResizeObserver = (
  cb: ResizeObserverCallback,
  ref: MutableRefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(cb);

    if (ref.current) {
      resizeObserver.observe(ref.current, {});
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [cb]);
};

export default useResizeObserver;
