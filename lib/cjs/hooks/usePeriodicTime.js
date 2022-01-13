"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const usePeriodicTime = (interval = 1000) => {
    const [date, setDate] = (0, react_1.useState)(new Date());
    (0, react_1.useEffect)(() => {
        const i = setInterval(() => {
            setDate(new Date());
        }, interval);
        return () => {
            clearInterval(i);
        };
    }, [interval]);
    return date;
};
exports.default = usePeriodicTime;
//# sourceMappingURL=usePeriodicTime.js.map