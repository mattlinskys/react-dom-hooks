"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowEvent = (event, cb, options) => {
    (0, react_1.useEffect)(() => {
        window.addEventListener(event, cb, options);
        return () => {
            window.removeEventListener(event, cb, options);
        };
    }, [event, cb, options]);
};
exports.default = useWindowEvent;
//# sourceMappingURL=useWindowEvent.js.map