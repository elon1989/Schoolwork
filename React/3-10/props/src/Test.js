export default function Test(props) {
  let testArray = props.songList || [];
  let songList = testArray.map((item) => {return <li>{item}</li>})
  return (
    
    <div>
      <h2>{props.name}</h2>
      <ul>
        {songList}
      </ul>
    </div>
  );
}
