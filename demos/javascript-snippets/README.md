# JavaScript 代码片段

## 手写 Promise

### utils

#### state

> A promise must be in one of three states: pending, fulfilled, or rejected.

```js
// state
// 先将 Promise 的三种状态写入常量state中
const state = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};
```

#### thenable

> “thenable” is an object or function that defines a then method.

```js
// thenable
// 用于判断是否为thenable
const isThenable = maybeThenable =>
  maybeThenable && typeof maybeThenable.then === 'function';
```

### 整体骨架

```js
// skeleton
class MarcusPromise {
  constructor(computation) {
    this._state = state.PENDING

    this._value = undefined
    this._reason = undefined

    if (typeof computation === 'function') {
      setTimeout(() => {
        computation(
          this._onFulfilled.bind(this),
          this._onRejected.bind(this)
        )
      })
    }

    // .then()
    this.thenQueue = []
    // .finally()
    this.finallyQueue = []

    then() {}
    catch() {}
    finally() {}

    _onFulfilled() {}
    _onRejected() {}
  }
}
```

#### \_onFulfilled (resolve)

#### \_onRejected (reject)

#### then

#### catch

#### finally

```js
// 实现 _onFulfilled 和 _onRejected
_onFulfilled() {
  if(this._state === 'pending') {
    this._state = state.FULFILLED;
  }
}
_onRejected() {
  if(this._state === 'pending') {
    this._state = state.REJECTED;
  }
}
```
