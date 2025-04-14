import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise)
    console.log('user 2', user);
    return (
        <div>
            <h3>address : {user.address.city}</h3>
            <h3>company : {user.company.name}</h3>
            <h3>website : {user.website}</h3>
        </div>
    );
};

export default UserDetails2;