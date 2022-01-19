"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useTimeout = (cb, timeout) => {
    (0, react_1.useEffect)(() => {
        const t = window.setTimeout(cb, timeout);
        return () => {
            window.clearTimeout(t);
        };
    }, [cb, timeout]);
};
exports.default = useTimeout;
//# sourceMappingURL=useTimeout.js.map