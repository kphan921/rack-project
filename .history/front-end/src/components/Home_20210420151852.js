import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import camera_logo from '../images/camera.gif';
import lens_logo from '../images/lens.gif'
import "./App.css";


const Home=() => {
    return (
        <div>
            <Button component={Link} to="/cameras"> 
                <img className="Home_Button" src={camera_logo}></img>
             </Button>
            <div></div>
            <Button component={Link} to="/lens"> 
                <img className="Home_Button" src={lens_logo}></img>
             </Button>
        </div>
    )
}

export default Home;