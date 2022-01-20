const useDebounce = () => {
  const debounce = (cb: () => void, delay: number) => {
    let timeout: ReturnType<Window["setTimeout"]> | undefined;

    return () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(cb, delay);
    };
  };

  return debounce;
};

export default useDebounce;
