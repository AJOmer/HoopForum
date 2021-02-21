import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Timeline from '../Timeline/Timeline';
import Widget from '../Widget/Widget';


import './Quora.css';

const Quora = () => {

    return (
        <div className="quora_container">
            <Navbar/>
            <div className="quora_body">
                <Sidebar/>
                <Timeline/>
                <Widget/>
            </div>
        </div>
    )
}

export default Quora