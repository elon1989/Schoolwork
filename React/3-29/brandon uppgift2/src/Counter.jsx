import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increaseBy60,
  increaseByAmount
} from "./redux/ducks/counter";

const Counter = () => {
  const [value, setValue] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncreaseByAmount = () => {
    let valueInt = parseInt(value);
    dispatch(increaseByAmount(valueInt));
    setValue(0);
  };

  const handleChangeAmount = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <input
        onChange={handleChangeAmount}
        name="value"
        value={value}
        id="customValue"
        placeholder="Enter value..."
      ></input>
      <button onClick={handleIncreaseByAmount}>Add value</button>
    </div>
  );
};

export default Counter;
