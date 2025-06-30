# @maotongjian/function-utils

A tiny utility library for `debounce` and `throttle` in JavaScript.

## Installation

```bash
npm install @maotongjian/function-utils
```

## Usage

```js
import {
  debounce,
  debounceImmediate,
  throttleFlag,
  throttleTime,
} from '@maotongjian/function-utils';

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

## Functions

- `debounce(fn, delay)`
- `debounceImmediate(fn, delay, immediate)`
- `throttleFlag(fn, delay)`
- `throttleTime(fn, delay)`

## License

MIT
