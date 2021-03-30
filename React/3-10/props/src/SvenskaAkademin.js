export default function SvenskaAkademin(props) {
  let arrayOfSongs = ['Snapphaneklanen', 'Sluta Stamma', 'Giriga Labbar'];
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
