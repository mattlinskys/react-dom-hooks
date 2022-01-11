# React handy hooks
Collection of handy and reusable react hooks

### How to use

#### Installation (type declaration is included in the package)
`npm i reaect-handy-hooks`

#### Import
```js
import { useOnEsc } from 'react-dom-hooks';
// Or just one hook
import useOnEsc from 'react-dom-hooks/useOnEsc';
```

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
  cb: ResizeObserverCallback,
  ref: MutableRefObject<HTMLElement | null>,
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

### If you know any handy, pure hooks feel free to contribute
