import React, { useRef, useState } from "react";
import useOnResize from "../hooks/useOnResize";
import useOutsideClick from "../hooks/useOutsideClick";

const hookToComponent = {
  "use-outside-click": () => {
    const ref = useRef<HTMLDivElement | null>();
    useOutsideClick(ref, () => {
      alert("Outside click");
    });

    return (
      <div ref={ref} style={{ padding: "1rem", backgroundColor: "red" }}>
        <p>Click outside of this box</p>
      </div>
    );
  },
  "use-on-resize": () => {
    const [size, setSize] = useState<{ width: number; height: number }>();
    useOnResize(setSize);

    return (
      <>
        <p>Start resizing:</p>
        <p>
          width: {size?.width ?? "-"}, height: {size?.height ?? "-"}
        </p>
      </>
    );
  },
};

export interface HooksProps {
  hookKey: keyof typeof hookToComponent;
}

const Hooks = ({ hookKey }: HooksProps) => {
  const Component = hookToComponent[hookKey];
  return <Component />;
};

export default Hooks;
