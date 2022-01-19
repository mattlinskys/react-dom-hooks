import { useEffect } from "react";

const useInterval = (cb: () => void, interval: number) => {
  useEffect(() => {
    const i = window.setInterval(cb, interval);

    return () => {
      window.clearInterval(i);
    };
  }, [cb, interval]);
};

export default useInterval;
