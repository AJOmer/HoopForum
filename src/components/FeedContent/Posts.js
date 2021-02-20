import { Avatar } from '@material-ui/core';
import React from 'react';
import { Avatar } from '@material-ui/core';

import './Posts.css';


const Post = () => {
    return (
        <div className="post_container">
            <div className="post_deets">
                <Avatar/>
                <h5>Username</h5>
                <small>timestamp</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_button">Answer</button>
                </div>
            </div>
        </div>
    )
}

export default Post;