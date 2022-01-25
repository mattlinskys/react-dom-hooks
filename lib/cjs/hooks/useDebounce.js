"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useDebounce = () => {
    const debounce = (cb, delay) => {
        let timeout;
        return () => {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(cb, delay);
        };
    };
    return debounce;
};
exports.default = useDebounce;
//# sourceMappingURL=useDebounce.js.map