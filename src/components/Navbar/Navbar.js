import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FeaturedPlaylistOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { Avatar, Button, Input} from '@material-ui/core';
import QuoraLogo from '../../imgs/quora.png';

import './Navbar.css';
import { AssignmentTurnedIn } from '@material-ui/icons';

function Navbar(){
    return (
        <div className="nav_container">
            <div className="nav_logo">
                <img src={QuoraLogo} alt="quora logo"/>
            </div>
            <div className="nav_tabs">
                <div className="active navIcon">
                    <HomeIcon/>
                </div>
                <div className="navIcon">
                    <FeaturedPlaylistOutlinedIcon/>
                </div>
                <div className="navIcon">
                    <AssignmentTurnedInOutlinedIcon/>
                </div>
                <div className="navIcon">
                    <PeopleAltOutlinedIcon/>
                </div>
                <div className="navIcon">
                    <NotificationsOutlinedIcon/>
                </div>
                <div className="navSearch">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Forum"/>
                </div>
                <div className="navAvi">
                    <div className="nav_avatar">
                        <Avatar/>
                    </div>
                    <LanguageIcon/>
                    <Button>Add Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar