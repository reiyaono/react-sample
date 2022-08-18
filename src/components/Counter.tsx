import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  // countが今の状態、setCountが状態を更新する関数
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCountを呼ぶことで状態を更新する */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
    </div>
  )
}

export default Counter
