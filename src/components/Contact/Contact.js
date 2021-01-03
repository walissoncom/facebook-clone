import React from 'react';
import { Avatar } from '@material-ui/core';

import './Contact.css';

function Contact({ profileSrc, name }) {
    return (
        <div className="contact">
            <Avatar src={profileSrc} />
            <h4>{name}</h4>
        </div>
    )
}

export default Contact;