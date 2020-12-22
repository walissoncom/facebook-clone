import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-1/p148x148/69748769_2463618973684633_6550988242198462464_n.jpg?_nc_cat=111&ccb=2&_nc_sid=dbb9e7&_nc_ohc=mqiz1h2fOWoAX8rRUaW&_nc_ht=scontent.fsyd8-1.fna&tp=6&oh=f1fdb9ca7b1662ac131b38530844ff73&oe=600865D9" title="Walisson Rodrigues" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Market Place" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Videos" />
        </div>
    )
}

export default Sidebar;