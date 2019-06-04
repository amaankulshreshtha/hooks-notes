# Hooks Notes

## Conversions

---

### useState

```javascript
state + setState(...) = useState(...)
```

---

### useEffect

1. This method will not be called in a synchronous manner
2. This is called **AFTER** the component has rendered
3. It's used to manage any side effects

#### componentDidMount

```javascript
componentDidMount() {...} = useEffect(()=> {...}, [])
```

The `[]` argument above is **very important**.

1. This is an `dependencies array`
2. This tells the `useEffect` hook to execute on after render when any of the mentioned dependencies change
3. If there are no dependencies inside the `dependencies array`, this means that there are no dependencies that need to be tracked, hence run only one time after the first render. _(as per the lifecycle explanation, `componentDidMount` runs only one time, i.e after the first render)_
4. If the `array argument` is not mentioned, then it means that this function will execute after every render, which can be **dangerous**. _(Eg: https://youtu.be/-MlNBTSg_Ww?t=2251)_

#### componentDidUpdate

```javascript
/**
 * @type {array} dependencies that expect a change in value
 */
let dependencies = [];
componentDidUpdate() {...} = useEffect(() => {...}, dependencies)
```

As mentioned in 2.) above, it will check if the dependency has been updated, and will execute only if it has been updated.

#### componentWillUnmount

```javascript
componentWillUnmount() {...} = useEffect(()=> {
  // other code
  return () => {...}
  }, dependencies)
```

1. `useEffect` callback function can return another function. This function is always executes right before `useEffect` runs the next time. So it acts as a cleanup.
2. We can either return a value or return nothing
3. If you want the `useEffect` to run a cleanup only one time, then write the below

```javascript
useEffect(()=> {
  // other code
  return () => {...}
  }, [])
```

The above will only execute once. Since it is not watching for any dependencies, it will not execute after each render.
As per 1.) above, this means that the `return function` will only execute one time, before the first render of the component _(as a cleanup)_

---

## Sharing stateful logic between components

### Custom hooks

IMO the best way to approach:

1. write individual hooks for each file
2. See what is common and then separate that common part and make it into a custom hook

---

**Add console statements to inspect and know more about lifecycle of hooks**
