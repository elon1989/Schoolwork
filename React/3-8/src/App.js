import "./styles.css";
import School from "./School";
export default function App() {
  let greeting = "Welcome to University of React!";

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <School />
    </div>
  );
}
