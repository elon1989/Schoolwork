export default function Heltoff(props) {
  let arrayOfSongs = ['Välvalda Ord', 'Säg Som Det E', 'Jobba'];
  let songList = arrayOfSongs.map((item) => {return <li>{item}</li>})
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {songList}
      </ul>
    </div>
  );
}
