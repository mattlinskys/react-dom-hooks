import useWindowEvent from "./useWindowEvent";
const useOutsideClick = (ref, cb) => useWindowEvent("click", (e) => {
    if (ref.current && !e.composedPath().includes(ref.current)) {
        cb(e);
    }
});
export default useOutsideClick;
//# sourceMappingURL=useOutsideClick.js.map