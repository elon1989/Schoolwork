export default function Class(props) {
  return (
    <div className="Class">
      {props.className === "FEU20" ? (
        <>
          <h3>Class: {props.className}</h3>
          <ul>{props.studentList}</ul>
        </>
      ) : (
        <h3>Frontend not found </h3>
      )}
    </div>
  );
}
