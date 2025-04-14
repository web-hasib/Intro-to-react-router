// import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const {body,title} = useLoaderData();
    const navigate = useNavigate();
    // console.log(post);
    return (
        <div style={{backgroundColor: '#ffcc' , borderRadius: '20px', border: '1px solid red', margin: '10px', padding: '10px' }}>
            <h3>{title}</h3>
            <h4>{body}</h4>

            <br />
            {/* <Link to={`/posts`}>
            <button>Back</button></Link> */}
            <button onClick={()=> navigate(-1)}>go back</button>
        </div>
    );
};

export default PostDetails;