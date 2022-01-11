declare const useWindowEvent: <K extends keyof WindowEventMap>(event: K, cb: (this: Window, ev: WindowEventMap[K]) => void, options?: boolean | AddEventListenerOptions | undefined) => void;
export default useWindowEvent;
