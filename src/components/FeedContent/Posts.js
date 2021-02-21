import React from 'react';
import { Avatar } from '@material-ui/core';
import { ShareOutlined, MoreHorizOutlined} from '@material-ui/icons';
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import BookGeorge from '../../imgs/bookgeorge.jpg';

import './Posts.css';


const Post = () => {
    return (
        <div className="post_container">
            <div className="post_details">
                <Avatar/>
                <h5>Username</h5>
                <small>timestamp</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_button">Answer</button>
                </div>
                <img src={BookGeorge} alt="posting"/>
            </div>
            <div className="post_footer">
                <div className="post_footer_actions">
                    <ArrowDownwardOutlinedIcon/>
                    <ArrowUpwardOutlinedIcon/>
                </div>
                <RepeatOutlinedIcon/>
                <ChatBubbleOutlinedIcon/>
            </div>
            <div className="post_footer_left">
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>
    )
}

export default Post;