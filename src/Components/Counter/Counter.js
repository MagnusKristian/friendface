import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => { 
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

// export default Counter;