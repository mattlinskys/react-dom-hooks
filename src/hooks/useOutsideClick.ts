import type { MutableRefObject } from "react";
import useWindowEvent from "./useWindowEvent";

const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: (event: MouseEvent) => void
) =>
  useWindowEvent("click", (e) => {
    if (ref.current && !e.composedPath().includes(ref.current)) {
      cb(e);
    }
  });

export default useOutsideClick;
