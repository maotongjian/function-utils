export function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export function debounceImmediate(fn, delay, immediate = false) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (immediate) {
      if (!timer) fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}

export function throttleFlag(fn, delay) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      fn.apply(this, args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
}

export function throttleTime(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const nowTime = Date.now();
    if (nowTime - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = nowTime;
    }
  };
}
