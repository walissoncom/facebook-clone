import React from 'react';
import { Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './SidebarRow.css';

function SidebarRow({ src, Icon, title, url }) {
    return (
        <div className="sidebarRow">
            <Link to={url}>
                {src && <Avatar src={src} />}
                {Icon && <Icon />}

                <h4>{title}</h4>
            </Link>
        </div>
    )
}

export default SidebarRow;