import React from 'react';
import QuestionBox from '../QuestionBox/QuestionBox';
import Posts from '../FeedContent/Posts';
import './Timeline.css';


const Timeline = () => {
    return(
        <div className ="timeline_container">
            <QuestionBox/>
            <Posts/>
        </div>
    )
}

export default Timeline;