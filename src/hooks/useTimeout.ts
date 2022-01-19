import { useEffect } from "react";

const useTimeout = (cb: () => void, timeout: number) => {
  useEffect(() => {
    const t = window.setTimeout(cb, timeout);

    return () => {
      window.clearTimeout(t);
    };
  }, [cb, timeout]);
};

export default useTimeout;
