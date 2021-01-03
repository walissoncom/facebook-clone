import React from 'react';

import Contact from '../Contact/Contact';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './Contacts.css';

function Contacts() {
    return (
        <div className="contacts">

            <div className="contacts__header">
                <div className="contacts__headerLeft">
                    <h3>Contacts</h3>
                </div>
                <div className="contacts__headerRight">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>

            <div className="contacts__body">

                <Contact
                    profileSrc="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/79515135_10111007623880301_5111576226921709568_o.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_ohc=ItnnQ32UzcYAX8P9089&_nc_ht=scontent.fsyd8-1.fna&tp=27&oh=f94599f435dc9d5b0a968ff5f1a0adee&oe=60168D77"
                    name="Mark Zuckerberg" />

                <Contact
                    profileSrc="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/23473074_10155031875776961_8482140412038626648_n.jpg?_nc_cat=1&ccb=2&_nc_sid=1eb0c7&_nc_ohc=mpijnlaqxFUAX_GodHr&_nc_ht=scontent.fsyd8-1.fna&tp=27&oh=b9a5270ad0033bddcc1c7f74fb63f3b5&oe=6015D20A"
                    name="Bill Gates" />

                <Contact
                    profileSrc="https://pbs.twimg.com/profile_images/1113542012597297152/ZLdePhox_bigger.png"
                    name="MacKenzie Scott" />

                <Contact
                    profileSrc="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_200x200.jpg"
                    name="Elon Musk" />

                <Contact
                    profileSrc="https://pbs.twimg.com/profile_images/3599636117/8468a03db84ec4211c3efeba18ac3925_bigger.png"
                    name="Warren Buffett" />

                <Contact
                    profileSrc="https://pbs.twimg.com/profile_images/656175279870603264/527I9RKw_200x200.jpg"
                    name="Laurene Powell Jobs" />

                <Contact
                    profileSrc="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_bigger.jpg"
                    name="Jeff Bezos" />
            </div>
        </div>
    )
}

export default Contacts;