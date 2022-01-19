"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useInterval_1 = __importDefault(require("hooks/useInterval"));
const react_1 = require("react");
const usePeriodicTime = (interval = 1000) => {
    const [date, setDate] = (0, react_1.useState)(new Date());
    const cb = (0, react_1.useCallback)(() => {
        setDate(new Date());
    }, []);
    (0, useInterval_1.default)(cb, interval);
    return date;
};
exports.default = usePeriodicTime;
//# sourceMappingURL=usePeriodicTime.js.map