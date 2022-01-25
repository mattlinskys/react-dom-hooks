declare const useDebounce: () => (cb: () => void, delay: number) => () => void;
export default useDebounce;
