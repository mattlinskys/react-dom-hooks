"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const getSecondsFromDate = (date) => date.getTime() > Date.now()
    ? Math.ceil((date.getTime() - Date.now()) / 1000)
    : null;
const useCountDown = (date, refreshInterval = 1000) => {
    const [seconds, setSeconds] = (0, react_1.useState)(date ? getSecondsFromDate(date) : null);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            if (date) {
                const newSeconds = getSecondsFromDate(date);
                if (newSeconds !== seconds) {
                    setSeconds(newSeconds);
                }
            }
        }, refreshInterval);
        return () => {
            clearInterval(interval);
        };
    }, [date, seconds, refreshInterval]);
    (0, react_1.useEffect)(() => {
        if (!date && seconds !== null) {
            setSeconds(null);
        }
    }, [date]);
    return seconds;
};
exports.default = useCountDown;
//# sourceMappingURL=useCountDown.js.map