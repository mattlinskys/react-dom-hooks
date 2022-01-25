# React handy hooks

Collection of handy and reusable react hooks

### How to use

#### Installation (type declaration is included in the package)

`npm i react-handy-hooks`

#### Import

```js
import { useOnEsc } from "react-dom-hooks";
// Or just one hook
import useOnEsc from "react-dom-hooks/useOnEsc";
```

### Storybook

You can explore all hooks in the [storybook](https://storybook.js.org/)

`npm run storybook`

Make sure to run `npm i` before starting storybook

### Hooks

#### useOnEsc

```ts
// Callback on 'Escape' keyup pressed
useOnEsc(onEsc: () => void) => void;
```

#### useKeyListener

```ts
// Callback on specified key(s) pressed
useKeyListener(
  key: string | string[],
  cb: (key: string, e: KeyboardEvent) => void
) => void;
```

#### useCountDown

```ts
// Count down from provided date to Date.now(), returns number of seconds or null if finished
useCountDown(
  date?: Date,
  refreshInterval?: number = 1000
) => number | null;
```

#### useOnResize

```ts
// Callback on 'resize' window event
useOnResize(cb: (size: {
    width: number;
    height: number;
}) => void;
```

#### useResizeObserver using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)

```ts
// Callback when ref's element size changes
useResizeObserver(
  ref: MutableRefObject<HTMLElement | null>,
  cb: ResizeObserverCallback
) => void;
```

#### useWindowEvent

```ts
// Simple window.addEventListner
useWindowEvent(
  event: Key,
  cb: (this: Window, ev: WindowEventMap[Key]) => void,
  options?: boolean | AddEventListenerOptions
) => void;
```

#### useWindowSize

```ts
// Keeps track of window size (undefined before first useEffect callback)
useWindowSize() => {
    width: number;
    height: number;
} | undefined;
```

#### useOutsideClick

```ts
// Callback on click outside of given ref's element
useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  cb: (event: MouseEvent) => void
) => void;
```

#### usePeriodicTime

```ts
// Returns new date periodically every `interval` ms
usePeriodicTime(interval = 1000) => Date;
```

#### useInterval

```ts
// Simple window.setInterval (resets on cb reference or interval value change)
useInterval(cb: () => void, interval: number) => Date;
```

#### useTimeout

```ts
// Simple window.setTimeout (resets on cb reference or interval value change)
useTimeout(cb: () => void, interval: number) => Date;
```

#### useClipboard

```ts
// Returns function to copy text using navigator.clipboard.writeText
useClipboard() => (text: string) => void;
```

#### useThrottle

```ts
// Returns throttle maker
useThrottle() => () => (cb: () => void, delay: number) => void;
```

#### useDebounce

```ts
// Returns debounce maker
useDebounce() => () => (cb: () => void, delay: number) => void;
```

#### useElementVisibility

```ts
// Returns true if element is visible in the view
// Reacts to scrolling and ResizeObserver
// Set parentSelector (e.g. #id) if ref.current is in an overflow parent, by default window is used
useElementVisibility(
  ref: MutableRefObject<HTMLElement | null>,
  offset = 100,
  {
    parentSelector,
    throttleDelay,
  }: { parentSelector?: string; throttleDelay: number }
) => boolean;
```

#### useIsWindowActive

```ts
// Returns true if current window is focused, false otherwise
useIsWindowActive() => boolean;
```

### If you know any handy, pure hooks feel free to contribute
