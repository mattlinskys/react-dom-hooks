"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useIsWindowActive = () => {
    const [isActive, setIsActive] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
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
exports.default = useIsWindowActive;
//# sourceMappingURL=useIsWindowActive.js.map