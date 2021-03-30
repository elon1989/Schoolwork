import { useState } from "react";

const Employees = (props) => {
    const [hidden, setHidden] = useState(false);

    const moreInfo = () => {
        if (hidden === false) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    }

    return (
        <>
        <div className="elevator">
            <div className="employees">
                {props.firstName}
                {hidden ? ` ${props.lastName}. Age: ${props.age}` : <></>}
                <button className="more" onClick={moreInfo}>{hidden ? 'less' : 'more'}</button>
            </div>
        </div>     
        </>
    )
}

export default Employees;
