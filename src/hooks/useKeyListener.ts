import { useCallback } from "react";
import useWindowEvent from "./useWindowEvent";

const useKeyListener = (
  key: string | string[],
  cb: (key: string, e: KeyboardEvent) => void
) => {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (Array.isArray(key) ? key.includes(e.key) : key === e.key) {
        cb(e.key, e);
      }
    },
    [key, cb]
  );

  useWindowEvent("keyup", handler);
};

export default useKeyListener;
