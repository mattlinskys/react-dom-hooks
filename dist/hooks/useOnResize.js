"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useWindowEvent_1 = __importDefault(require("./useWindowEvent"));
const useOnResize = (cb) => (0, useWindowEvent_1.default)("resize", function () {
    cb({ width: window.innerWidth, height: window.innerHeight });
});
exports.default = useOnResize;
//# sourceMappingURL=useOnResize.js.map