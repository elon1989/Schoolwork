import "./styles.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const isDarkMode = useSelector((state) => state.counter.isDarkMode);
  console.log(isDarkMode)
  return (
    <div className="App">
      <h1>Hello Redux!</h1>
      <h2>Global state is:{count}</h2>
      <Counter />
    </div>
  );
}
