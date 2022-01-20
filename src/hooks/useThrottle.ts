const useThrottle = () => {
  const throttle = (cb: () => void, delay: number) => {
    let timeout: ReturnType<Window["setTimeout"]> | null = null;

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
