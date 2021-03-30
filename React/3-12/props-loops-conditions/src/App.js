import "./styles.css";
import School from "./School";
export default function App() {
  let schoolName = "EC Utbildning Växjö";
  let classList = [
    ["Daniel", "Elin", "Ellie", "Erik", "Fatemeh"],
    ["Elmin", "Lexx", "Ibrahim", "Loke", "Martin", "Max"]
  ];
  return (
    <div className="App">
      <h1>Welcome to school!</h1>
      <School name={schoolName} city={"Växjö"} students={classList} />
    </div>
  );
}
