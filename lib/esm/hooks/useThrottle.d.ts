declare const useThrottle: () => (cb: () => void, delay: number) => () => void;
export default useThrottle;
