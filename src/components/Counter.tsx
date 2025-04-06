import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const minusNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => minusNumber()}>Minus</button>
    </div>
  );
}
