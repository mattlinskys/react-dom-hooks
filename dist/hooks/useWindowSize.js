"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useOnResize_1 = __importDefault(require("./useOnResize"));
const useWindowSize = () => {
    const [size, setSize] = (0, react_1.useState)();
    (0, useOnResize_1.default)(setSize);
    return size;
};
exports.default = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map