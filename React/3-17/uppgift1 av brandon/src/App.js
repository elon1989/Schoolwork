import "./styles.css";
import Student from "./Student";
export default function App() {
  let studentList = [
    {
      firstName: "Oskar",
      lastName: "Godis",
      age: 42,
      id: 0,
    },
    {
      firstName: "Christian",
      lastName: "Kaktus",
      age: 16,
      id: 1,
      },
    {
      firstName: "Petros",
      lastName: "Fisk",
      age: 22,
      id: 2
    },
    {
      firstName: "Karamell",
      lastName: "Kungen",
      age: 84,
      id: 3
    }
  ];

  return (
    <div className="App">
      <h1>Hello React class!</h1>
      <h2>Start editing to see some magic happen!</h2>
      {studentList.map((student, i) => {
        return <Student {...student} key={i} />;
      })}
    </div>
  );
}
