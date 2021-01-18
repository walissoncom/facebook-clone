import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './LocalUpdates.css';

function LocalUpdates() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://corona-api.com/countries/AU`)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className="localUpdates">
            <h3>Local Updates</h3>
        </div>
    )
}

export default LocalUpdates;