import "./styles.css";
import Profile from "./Profile";

export default function App(props) {
  let myName = 'Elon';
  let myAge = 31;
  return (
    <div className="App">
      <Profile name={myName} age={myAge}/>
    </div>
  );
}
