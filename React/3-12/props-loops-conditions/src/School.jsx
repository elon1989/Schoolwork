import Class from "./Class";

export default function School({ name, city, students }) {
  let className = ["FEU20", "JAV20"];
  let listOfStudents = students[0].map((name) => {
    return <li>{name}</li>;
  });
  let listOfStudents2 = students[1].map((name) => {
    return <li>{name}</li>;
  });
  return (
    <div className="School">
      <h2>School name: {name}</h2>
      <h3>City: {city}</h3>
      <Class className={className[0]} studentList={listOfStudents} />
      <Class className={className[1]} studentList={listOfStudents2} />
    </div>
  );
}
