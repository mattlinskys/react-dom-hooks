import { useEffect, useState } from "react";
import useOnResize from "./useOnResize";
const useWindowSize = () => {
    const [size, setSize] = useState();
    useOnResize(setSize);
    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);
    return size;
};
export default useWindowSize;
//# sourceMappingURL=useWindowSize.js.map