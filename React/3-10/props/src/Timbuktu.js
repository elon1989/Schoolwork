export default function Timbuktu(props) {
  let arrayOfSongs = ['Lobbyn om 5', 'Ta de lugnt', 'Din lian i rapdjungelen', 'De luktar rök', 'The botten is nådd'];
  let songList = arrayOfSongs.map((item) => {return <li>{item}</li>});
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {songList}
      </ul>
    </div>
  );
}
