import './App.css';
import Employees from './Employees';
import { useState } from "react";

function App() {
  const [floor, setFloor] = useState(1);

  const Upp = () => {
    if(floor !== 3){
      setFloor(floor + 1);
    } 
  }

  const Down = () => {
    if(floor !== 1){
      setFloor(floor - 1);
    }
  }

  let employees = [
    {
      firstName: "Oskar",
      lastName: "Godis",
      age: 42,
      id: 0,
      officeFloor: 2
    },
    {
      firstName: "Christian",
      lastName: "Kaktus",
      age: 16,
      id: 1,
      officeFloor: 3
    },
    {
      firstName: "Gustav",
      lastName: "Vasa",
      age: 200,
      id: 1,
      officeFloor: 3
    },
    {
      firstName: "Petros",
      lastName: "Fisk",
      age: 22,
      id: 2,
      officeFloor: 2
    },
    {
      firstName: "Rickard",
      lastName: "Hawaii",
      age: 22,
      id: 2,
      officeFloor: 1
    },  {
      firstName: "Sven",
      lastName: "Göransson",
      age: 57,
      id: 2,
      officeFloor: 1
    }
    
  ];
 

  return (
    <>
      <div className="App">
        <div className="floors">
          <p className="floor">Floor: {floor}</p>
            <div className="floorContainer">
            <button className="btn radial left" onClick={Upp}>ᐃ</button>
            <button className="btn radial" onClick={Down}>ᐁ</button>
            </div>
            {employees.map((employee, i) => {
              if (employee.officeFloor === floor) {return (<Employees {...employee} key={i} floor='1'/>)}
              if (employee.officeFloor === floor) {return (<Employees {...employee} key={i} floor='2'/>)}
              if (employee.officeFloor === floor) {return (<Employees {...employee} key={i} floor='3'/>)}
          })}
        </div>
      </div>
    </>
  );
}

export default App;


/* {employees.sort((a, b) => (a.officeFloor > b.officeFloor ? 1 : -1)).map((employee, i) => {
          return <Employees {...employee} key={i}/>})} */