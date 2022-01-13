"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useKeyListener_1 = __importDefault(require("./useKeyListener"));
const useOnEsc = (onEsc) => (0, useKeyListener_1.default)("Escape", onEsc);
exports.default = useOnEsc;
//# sourceMappingURL=useOnEsc.js.map