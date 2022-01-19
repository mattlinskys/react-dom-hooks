"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useInterval = (cb, interval) => {
    (0, react_1.useEffect)(() => {
        const i = window.setInterval(cb, interval);
        return () => {
            window.clearInterval(i);
        };
    }, [cb, interval]);
};
exports.default = useInterval;
//# sourceMappingURL=useInterval.js.map