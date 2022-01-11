import { useEffect } from "react";

const useWindowEvent = <K extends keyof WindowEventMap>(
  event: K,
  cb: (this: Window, ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    window.addEventListener(event, cb, options);
    return () => {
      window.removeEventListener(event, cb, options);
    };
  }, [event, cb, options]);
};

export default useWindowEvent;
