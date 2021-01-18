import React from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import LocalUpdates from '../../components/LocalUpdates/LocalUpdates';

import './News.css';

function News() {
    return (
        <>
            <Header active="news" />
            <div className="news__body">
                <Banner />
                <LocalUpdates />
            </div>
        </>
    )
}

export default News;