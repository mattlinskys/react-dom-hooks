"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowEvent_1 = __importDefault(require("./useWindowEvent"));
const useKeyListener = (key, cb) => {
    const handler = (0, react_1.useCallback)((e) => {
        if (Array.isArray(key) ? key.includes(e.key) : key === e.key) {
            cb(e.key, e);
        }
    }, [key, cb]);
    (0, useWindowEvent_1.default)("keyup", handler);
};
exports.default = useKeyListener;
//# sourceMappingURL=useKeyListener.js.map