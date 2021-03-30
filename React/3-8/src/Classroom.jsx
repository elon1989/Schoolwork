import Table, { SmallTable, TinyTable, Chair } from "./Table";

export default function Classroom() {
  return (
    <div className="Classroom">
      Classroom
      <Table />
      <SmallTable />
      <Chair />
      <Chair />
      <Chair />
      <Chair />
    </div>
  );
}

export function SmallClassroom() {
  return (
    <div className="SmallClassrom">
      Small Classroom
      <Table />
      <SmallTable />
      <TinyTable />
      <Chair />
    </div>
  );
}
