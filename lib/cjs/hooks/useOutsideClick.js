"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useWindowEvent_1 = __importDefault(require("./useWindowEvent"));
const useOutsideClick = (ref, cb) => (0, useWindowEvent_1.default)("click", (e) => {
    if (ref.current && !e.composedPath().includes(ref.current)) {
        cb(e);
    }
});
exports.default = useOutsideClick;
//# sourceMappingURL=useOutsideClick.js.map