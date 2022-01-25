import { useState, useLayoutEffect } from "react";
import useThrottle from "./useThrottle";
const useElementVisibility = (ref, offset = 100, { parentSelector, throttleDelay, }) => {
    const [isVisible, setVisible] = useState(false);
    const throttle = useThrottle();
    useLayoutEffect(() => {
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
export default useElementVisibility;
//# sourceMappingURL=useElementVisibility.js.map