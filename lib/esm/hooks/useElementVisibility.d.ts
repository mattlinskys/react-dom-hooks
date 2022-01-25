import { MutableRefObject } from "react";
declare const useElementVisibility: (ref: MutableRefObject<HTMLElement | null>, offset: number | undefined, { parentSelector, throttleDelay, }: {
    parentSelector?: string | undefined;
    throttleDelay: number;
}) => boolean;
export default useElementVisibility;
