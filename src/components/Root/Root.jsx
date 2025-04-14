import React from 'react';
import Header from './Header/Header';
import { Link, Outlet, useNavigation } from 'react-router';
import Footer from './Footer/Footer';
import SideBar from './SideBar/SideBar';
import './Root.css';

const Root = () => {
    const navigation = useNavigation();
    const inNavigating = Boolean(navigation.location)

    return (
        <div>
            <Header />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            {
                inNavigating && <span>loading ...</span>
            }
                <SideBar />
            
            <Outlet />
          </div>
            <Footer/>
        </div>
    );
};

export default Root;