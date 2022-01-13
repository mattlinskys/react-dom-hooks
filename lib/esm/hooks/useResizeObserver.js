import { useEffect } from "react";
const useResizeObserver = (ref, cb) => {
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
//# sourceMappingURL=useResizeObserver.js.map