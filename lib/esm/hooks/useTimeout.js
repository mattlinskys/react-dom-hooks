import { useEffect } from "react";
const useTimeout = (cb, timeout) => {
    useEffect(() => {
        const t = window.setTimeout(cb, timeout);
        return () => {
            window.clearTimeout(t);
        };
    }, [cb, timeout]);
};
export default useTimeout;
//# sourceMappingURL=useTimeout.js.map