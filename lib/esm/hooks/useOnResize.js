import { useCallback } from "react";
import useWindowEvent from "./useWindowEvent";
const useOnResize = (cb) => {
    const handleResize = useCallback(function () {
        cb({ width: this.innerWidth, height: this.innerHeight });
    }, [cb]);
    useWindowEvent("resize", handleResize);
};
export default useOnResize;
//# sourceMappingURL=useOnResize.js.map