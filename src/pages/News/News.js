import React from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

import './News.css';

function News() {
    return (
        <>
            <Header active="news" />
            <div className="app__body">
                <Banner />
            </div>
        </>
    )
}

export default News;