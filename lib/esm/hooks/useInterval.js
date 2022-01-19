import { useEffect } from "react";
const useInterval = (cb, interval) => {
    useEffect(() => {
        const i = window.setInterval(cb, interval);
        return () => {
            window.clearInterval(i);
        };
    }, [cb, interval]);
};
export default useInterval;
//# sourceMappingURL=useInterval.js.map