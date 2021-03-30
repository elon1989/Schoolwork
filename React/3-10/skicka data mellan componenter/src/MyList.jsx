export default function MyList({listHeader, list}) {
  return (
    <div className='Mylist'>
      <h3 className='listHeader'>{listHeader}</h3>
      {/* <h3 className='listHeader'>{listObject.Frukter.name}</h3> */}
      <ul>
        {list.map((item) => {return <li>{item}</li>})}
        {/* listObject.frukter.listitems.map((item) => {return <li>{item}</li>}) */}
      </ul>
    </div>
  );
}
