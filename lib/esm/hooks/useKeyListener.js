import { useCallback } from "react";
import useWindowEvent from "./useWindowEvent";
const useKeyListener = (key, cb) => {
    const handler = useCallback((e) => {
        if (Array.isArray(key) ? key.includes(e.key) : key === e.key) {
            cb(e.key, e);
        }
    }, [key, cb]);
    useWindowEvent("keyup", handler);
};
export default useKeyListener;
//# sourceMappingURL=useKeyListener.js.map