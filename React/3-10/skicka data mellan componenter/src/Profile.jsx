import MyList from "./MyList";

export default function Profile({name, age}) {
  let listHeader = ['Frukter', 'Bär', 'Djur'];

  let listArray = 
  [['Äppel', 'Banan', 'Apelsin', 'Klementin', 'Mango'],
  ['Björnbär', 'Smultron', 'Hallon', 'Jordgubbar', 'Blåbär'], 
  ['Kanin', 'Hund', 'Katt', 'Räv', 'Älg']];

  //exempel att skicka med det som ett object istället.
  let listObject = {
    Frukter:{
      name:'Frukter',
      listitems:['Äppel', 'Banan', 'Apelsin', 'Klementin', 'Mango']
    },
    Bär:{},
    Djur:{}
  } 
  console.log(listObject.Frukter.listitems)

  return (
    <div className='Profile'>
      <h3>Namn:{name}</h3>
      <h3>Ålder:{age}</h3>
      <MyList listHeader={listHeader[0]} list={listArray[0]}/>
      <MyList listHeader={listHeader[1]} list={listArray[1]}/>
      <MyList listHeader={listHeader[2]} list={listArray[2]}/>
      {/* listObject={listObject.Frukter} */}
    </div>
  );
}
