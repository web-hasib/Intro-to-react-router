import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Post</NavLink>
                {/* <NavLink to="/products">Products</NavLink> */}
            </nav>
        </div>
    );
};

export default Header;