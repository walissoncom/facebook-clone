import React from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed';
import Contacts from '../../components/Contacts/Contacts';

import './Home.css';

function Home() {
    return (
        <>
            <Header active="home" />
            <div className="app__body">
                <Sidebar />
                <Feed />
                <Contacts />
            </div>
        </>
    )
}

export default Home;