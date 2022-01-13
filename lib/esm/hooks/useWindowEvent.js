import { useEffect } from "react";
const useWindowEvent = (event, cb, options) => {
    useEffect(() => {
        window.addEventListener(event, cb, options);
        return () => {
            window.removeEventListener(event, cb, options);
        };
    }, [event, cb, options]);
};
export default useWindowEvent;
//# sourceMappingURL=useWindowEvent.js.map