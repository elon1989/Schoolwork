import Book, {RedBook} from './Book';

export default function Table() {
  return <div className="Table"><Book/><Book/><RedBook/><Book/></div>;
}

export function SmallTable() {
  return <div className="SmallTable"><Book/><Book/></div>;
}

export function TinyTable() {
  return <div className="TinyTable"></div>;
}

export function Chair() {
  return <div className="Chair"></div>
}
