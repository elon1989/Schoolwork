import { useSelector, useDispatch } from "react-redux";
import { decrement, increase60, increment, increaseByAmount } from "./redux/ducks/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrease60 = () => {
    dispatch(increase60());
  };
  const handleIncreaseByAmount = () => {
    dispatch(increaseByAmount(10))
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
      <button onClick={handleIncrease60}> Increase with 60 </button>
      <button onClick={handleIncreaseByAmount}> Increase with 60 </button>
    </div>
  );
};

export default Counter;
