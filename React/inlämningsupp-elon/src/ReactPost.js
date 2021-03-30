import PostLike from './PostLike';
import { useState } from 'react';

const ReactPost = (props) => {
    const [like, setLike] = useState(false)

    const toggleLike = () => {
        setLike(!like)
    }
    return (
        <>
            <div>
            <h2>{props.question} </h2>
            {props.answer.map(i => {return (<li>{i}</li>)})}
            {like ? '' : <button className="btn"onClick={toggleLike}>👍</button>}
            {like ? <PostLike/> : ''}
            </div>
        </>
    )
}

export default ReactPost;