import Classroom, { SmallClassroom } from "./Classroom.jsx";

export default function School() {
  return (
    <main className="School">
      <Classroom />
      <Classroom />
      <SmallClassroom />
      <SmallClassroom />
      <Classroom />
      <SmallClassroom />
    </main>
  );
}
