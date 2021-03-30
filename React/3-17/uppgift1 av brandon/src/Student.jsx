import {useState} from 'react'

const Student = (props) => {
  const [showMore,setShowMore] = useState(false);

  const toggleShow = () => {
    setShowMore(!showMore)
  }

  if(showMore){
    return (<div>
    <h2>{props.firstName + " " + props.lastName} </h2>
    <h3>Ålder:{props.age}</h3>
    <button onClick={toggleShow}>Show less</button>
    <br/>
    <br/>
    </div>)

  } else {
  return (
    <div>
      {props.firstName}
      <button onClick={toggleShow}>Show more</button>
    </div>
  );
  }
};
export default Student;
