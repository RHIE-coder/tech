# Fragment
# 주석 
# {}
# props
 - MyComponent.defaultProps = { key:value ...}
 - props.children
 - import PropTypes from 'prop-types'
   - MyComponent.propTypes = { name: PropTypes.string }
# ( React Events Type )
# Class Component 
## state
 - this.state
 - this.setState({number: number + 1})
 - this.setState((prevState)=>{ return { ... }})
 - this.setState((prevState, props)=> { return { ... }})
 - this.setState({ ... }, ()=>{ ... })
## life cycle

# Function Component
## useState

 - `const [name, setName] = useState('');`

## useEffect

 - `useEffect(()=>{ ... })`
 - `useEffect(()=>{ ... },[])`
 - `useEffect(()=>{ ... }, [name])`
 - `useEffect(()=>{ return ()=>{...} }, [name])`

## useReducer

 - function reducer(state, action) {}
 - `const [state, dispatch] = useReducer(reducer, {});`

## useMemo

```js
const avg = useMemo(()=>getAverage(list), [list])
~~~
~~~
<div>
     <b>평균값:</b> {avg}
</div>
```

## useCallback

```js
const onChange = useCallback(()=>{
  console.log("only once")
}, [])
```

## useRef

랜더링해도 값이 변경안됨

마운트 된 시점부터 마운트 해제될 때까지 같은 값을 게속해서 유지할 수 있음

```js
const input$ = useRef(null);
input$.current.focus();
```


