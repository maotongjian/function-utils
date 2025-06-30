# @maotongjian\*/function-utils

A tiny utility library for `debounce` and `throttle` in JavaScript.

## 🚀 Installation

```bash
npm install @maotongjian*/function-utils
```

## 📦 Usage

```js
import {
  debounce,
  debounceImmediate,
  throttleFlag,
  throttleTime,
} from '@maotongjian*/function-utils';

// debounce example
const logDebounce = debounce(() => console.log('debounce'), 500);

// debounceImmediate example
const logDebounceImmediate = debounceImmediate(
  () => console.log('debounceImmediate'),
  500,
  true
);

// throttleFlag example
const logThrottleFlag = throttleFlag(() => console.log('throttleFlag'), 500);

// throttleTime example
const lotThrottleTime = throttleTime(() => console.log('throttleTime'), 500);
```

## 🧰 Functions Reference

- `debounce(fn, delay)`
  Delays invoking fn until after delay milliseconds have passed since the last call.

- `debounceImmediate(fn, delay, immediate)`
  If immediate is true, fn is invoked immediately on the first call, then debounced.

- `throttleFlag(fn, delay)`
  Throttles fn using a simple flag lock. Useful for basic frequency control.

- `throttleTime(fn, delay)`
  Throttles fn based on timestamp difference. More accurate than flag throttling.

## 📄 License

MIT
