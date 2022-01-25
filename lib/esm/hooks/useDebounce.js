const useDebounce = () => {
    const debounce = (cb, delay) => {
        let timeout;
        return () => {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(cb, delay);
        };
    };
    return debounce;
};
export default useDebounce;
//# sourceMappingURL=useDebounce.js.map