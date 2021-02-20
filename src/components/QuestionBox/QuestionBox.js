import React from 'react';
import { Avatar } from '@material-ui/core';

import './QuestionBox.css';

const QuestionBox = () => {
    
    return(
        <div className="question_container">
            <div className="question_info">
                <Avatar className="avatar_container"/>
                <h5>Name Here</h5>
            </div>
            <div className="question_box">
                <p>Start a conversation or topic</p>
            </div>
        </div>
    )
}

export default QuestionBox;