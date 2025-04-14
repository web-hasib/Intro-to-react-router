import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo]= useState(false);
    const [visitHome , setVisitHome] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .then(res => res.json())

        if(visitHome){
            return<Navigate to='/home' replace={true} />
        }
        const location= useLocation();
        console.log(location);
       
    return (
        <div style={{border: '1px solid green',borderRadius: '20px', padding: '10px', margin: '10px'}}>
            <h5>name: {user.name}</h5>
            <p>email: {user.email}</p>
            <small>phone: {user.phone}</small>
            <br />
            <Link to={`/users/${user.id}`} style={{textDecoration: 'none', color: 'green',padding: '20px', fontWeight: 'bold'}}>Details</Link>
            <br />
            <br />
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo ? 'Hide': 'Show'} info</button>
            {
                showInfo &&  <Suspense fallback={ <div>
                    <br />
                    <span style={{color: 'red'}}>Loading...</span>
                </div>}>
                    <UserDetails2 userPromise={userPromise}/>
                </Suspense>
            }
            <br />
            <button onClick={()=> setVisitHome(true)}>
                Visit Home
            </button>
        </div>
    );
};

export default User;