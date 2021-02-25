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
import db, { auth } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';

import './Navbar.css';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { selectUser } from '../../features/userSlice';

function Navbar(){

    const user = useSelector(selectUser);
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
                        <Avatar onClick={() => auth.signOut()} src={user.photo ? user.photo : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"} />
                    </div>
                    <LanguageIcon/>
                    <Button>Add Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar