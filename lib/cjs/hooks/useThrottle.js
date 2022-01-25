"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useThrottle = () => {
    const throttle = (cb, delay) => {
        let timeout = null;
        return () => {
            if (!timeout) {
                timeout = window.setTimeout(() => {
                    cb();
                    timeout = null;
                }, delay);
            }
        };
    };
    return throttle;
};
exports.default = useThrottle;
//# sourceMappingURL=useThrottle.js.map