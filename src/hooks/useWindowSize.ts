import { useState } from "react";
import useOnResize from "./useOnResize";

type Size = Parameters<Parameters<typeof useOnResize>[0]>[0];

const useWindowSize = () => {
  const [size, setSize] = useState<Size>();
  useOnResize(setSize);

  return size;
};

export default useWindowSize;
