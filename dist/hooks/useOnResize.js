"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowEvent_1 = __importDefault(require("./useWindowEvent"));
const useOnResize = (cb) => {
    const handleResize = (0, react_1.useCallback)(function () {
        cb({ width: this.innerWidth, height: this.innerHeight });
    }, [cb]);
    (0, useWindowEvent_1.default)("resize", handleResize);
};
exports.default = useOnResize;
//# sourceMappingURL=useOnResize.js.map