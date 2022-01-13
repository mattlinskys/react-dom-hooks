import { MutableRefObject, useEffect } from "react";

const useResizeObserver = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: ResizeObserverCallback
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
