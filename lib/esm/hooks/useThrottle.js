const useThrottle = () => {
    const throttle = (cb, delay) => {
        let timeout = null;
        return () => {
            if (!timeout) {
                timeout = window.setTimeout(() => {
                    cb();
                    timeout = null;
                }, delay);
            }
        };
    };
    return throttle;
};
export default useThrottle;
//# sourceMappingURL=useThrottle.js.map