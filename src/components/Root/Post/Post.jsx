import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const { title, body, id  } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    };
    return (
        <div style={{backgroundColor: '#ffcc' , borderRadius: '20px', border: '1px solid red', margin: '10px', padding: '10px' }}>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <br />
            {/* <Link to={`/posts/${post.id}`}>
            <button>show details</button></Link> */}
            <button onClick={handleNavigate}>detais of : {id}</button>
        </div>
    );
};

export default Post;