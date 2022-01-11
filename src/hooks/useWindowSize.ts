import { useEffect, useState } from "react";
import useOnResize from "./useOnResize";

type Size = Parameters<Parameters<typeof useOnResize>[0]>[0];

const useWindowSize = () => {
  const [size, setSize] = useState<Size>();
  useOnResize(setSize);

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return size;
};

export default useWindowSize;
