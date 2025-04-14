import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            <h1>hi i am users  {users.length}</h1>
            <div>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;