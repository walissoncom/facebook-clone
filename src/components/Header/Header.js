import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../StateContext';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

import './Header.css';

function Header({ active }) {

    const [{ user }, dispatch] = useStateValue();

    const isActive = value => {
        return 'header__option ' + ((value === active) ? 'header__option---active' : '')
    }

    return (
        <div className="header">
            <div className="header__left">

                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png" alt="logo" />
                </Link>

                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div className={isActive('home')}>
                    <Link to="/">
                        <HomeIcon fontSize="large" />
                    </Link>
                </div>
                <div className={isActive('news')}>
                    <Link to="/news">
                        <FlagIcon fontSize="large" />
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/">
                        <SubscriptionsIcon fontSize="large" />
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/">
                        <StorefrontIcon fontSize="large" />
                    </Link>
                </div>
                <div className="header__option">
                    <Link to="/">
                        <SupervisedUserCircleIcon fontSize="large" />
                    </Link>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;