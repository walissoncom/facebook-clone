import React from 'react';

import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-1/p148x148/69748769_2463618973684633_6550988242198462464_n.jpg?_nc_cat=111&ccb=2&_nc_sid=dbb9e7&_nc_ohc=mqiz1h2fOWoAX8rRUaW&_nc_ht=scontent.fsyd8-1.fna&tp=6&oh=f1fdb9ca7b1662ac131b38530844ff73&oe=600865D9"
                message="Wow this works!"
                timestamp="01/01/2021"
                username="Walisson"
                image="https://static.ffx.io/images/$zoom_0.2149%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_97/t_crop_custom/q_86%2Cf_auto/8dff6c66789eb525e16d1e521a94a76abdc8312e" />

            <Post
                profilePic="https://scontent.fsyd8-1.fna.fbcdn.net/v/t1.0-1/p148x148/69748769_2463618973684633_6550988242198462464_n.jpg?_nc_cat=111&ccb=2&_nc_sid=dbb9e7&_nc_ohc=mqiz1h2fOWoAX8rRUaW&_nc_ht=scontent.fsyd8-1.fna&tp=6&oh=f1fdb9ca7b1662ac131b38530844ff73&oe=600865D9"
                message="Happy New Year!"
                timestamp="01/01/2021"
                username="Walisson" />
        </div>
    )
}

export default Feed;