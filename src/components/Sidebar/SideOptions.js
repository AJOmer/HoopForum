import React from 'react';
import { Add } from '@material-ui/icons';
import './SideOptions.css';
import Asw from '../../imgs/asw.png';
import Playoffs from '../../imgs/playoffs.png';
import Goat from '../../imgs/goat.png';
import CollegeHoops from '../../imgs/collegehoops.png';
import Trivia from '../../imgs/trivia.png';
import Music from '../../imgs/music.png';
import Health from '../../imgs/health.png';
import Misc from '../../imgs/misc.png';


const SideOptions = () => {
    return (
        <div className="sideOptionsMain">
            <div className="sideOptions">
                <img src={Asw} alt="al' star weekend"/>
                <p>All-star Weekend</p>
            </div>
            <div className="sideOptions">
                <img src={Playoffs} alt="playoffs"/>
                <p>Playoffs</p>
            </div>
            <div className="sideOptions">
                <img src={Goat} alt="goated" />
                <p>GOATed</p>
            </div>
            <div className="sideOptions">
                <img src={CollegeHoops} alt="hoops"/>
                <p>College Hoops</p>
            </div>
            <div className="sideOptions">
                <img src={Trivia} alt="trivia" />
                <p>Sports Academia</p>
            </div>
            <div className="sideOptions">
                <img src={Music} alt="music" />
                <p>Music</p>
            </div>
            <div className="sideOptions">
                <img src={Health} alt="health"/>
                <p>Health</p>
            </div>
            <div className="sideOptions">
                <img src={Misc} alt="Misc.." />
                <p>Misc.</p>
            </div>
            <div className="sideOptions">
                <Add/>
                <p className="text">Discover More</p>
            </div>
        </div>
    )
}

export default SideOptions;