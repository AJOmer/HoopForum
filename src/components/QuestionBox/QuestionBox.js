import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import './QuestionBox.css';
import { selectUser } from '../../features/userSlice';

const QuestionBox = () => {

    const user = useSelector(selectUser);
    
    return(
        <div className="question_container">
            <div className="question_info">
                <Avatar src={user.photo} className="avatar_container"/>
                <h5>{user.displayName}</h5>
            </div>
            <div className="question_box">
                <p>Start a conversation or topic</p>
            </div>
        </div>
    )
}

export default QuestionBox;