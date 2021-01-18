import React from 'react';

import Header from '../../components/Header/Header';

function News() {
    return (
        <>
            <Header active="news" />
            <div className="app__body">
                <h1>News</h1>
            </div>
        </>
    )
}

export default News;