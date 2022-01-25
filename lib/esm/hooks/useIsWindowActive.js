import { useState, useEffect } from "react";
const useIsWindowActive = () => {
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const visibilityChangeHandler = () => {
            setIsActive(!document.hidden);
        };
        window.addEventListener("visibilitychange", visibilityChangeHandler);
        return () => {
            window.removeEventListener("visibilitychange", visibilityChangeHandler);
        };
    }, []);
    return isActive;
};
export default useIsWindowActive;
//# sourceMappingURL=useIsWindowActive.js.map