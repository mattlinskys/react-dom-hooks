"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useThrottle_1 = __importDefault(require("./useThrottle"));
const useElementVisibility = (ref, offset = 100, { parentSelector, throttleDelay, }) => {
    const [isVisible, setVisible] = (0, react_1.useState)(false);
    const throttle = (0, useThrottle_1.default)();
    (0, react_1.useLayoutEffect)(() => {
        if (isVisible) {
            return;
        }
        const container = parentSelector
            ? document.querySelector(parentSelector)
            : window.document;
        const checkVisibility = () => {
            if (!ref.current) {
                return;
            }
            const containerRect = parentSelector
                ? container.getBoundingClientRect()
                : undefined;
            const refRect = ref.current.getBoundingClientRect();
            const frame = containerRect
                ? { width: containerRect.width, height: containerRect.height }
                : { width: window.innerWidth, height: window.innerHeight };
            const pos = containerRect
                ? {
                    x: refRect.left - containerRect.left,
                    y: refRect.top - containerRect.top,
                }
                : { x: refRect.left, y: refRect.top };
            if (pos.x + offset + refRect.width >= 0 &&
                pos.x - offset <= frame.width &&
                pos.y + offset + refRect.height >= 0 &&
                pos.y - offset <= frame.height) {
                setVisible(true);
            }
        };
        checkVisibility();
        const handleChange = throttle(checkVisibility, throttleDelay);
        const resizeObserver = new ResizeObserver(handleChange);
        if (parentSelector) {
            resizeObserver.observe(container);
        }
        container.addEventListener("scroll", handleChange);
        window.addEventListener("resize", handleChange);
        return () => {
            container.removeEventListener("scroll", handleChange);
            window.removeEventListener("resize", handleChange);
            resizeObserver.disconnect();
        };
    });
    return isVisible;
};
exports.default = useElementVisibility;
//# sourceMappingURL=useElementVisibility.js.map