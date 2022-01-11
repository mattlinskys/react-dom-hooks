import useKeyListener from "./useKeyListener";

const useOnEsc = (onEsc: () => void) => useKeyListener("Escape", onEsc);

export default useOnEsc;
