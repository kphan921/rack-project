import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import camera_logo from '../images/camera.gif';


const Home=() => {
    return (
        <div>
            <Button component={Link} to="/cameras"> 
                <img src={camera_logo}></img>
             </Button>
            <div></div>
            <Button component={Link} to="/lens"> Lens </Button>
        </div>
    )
}

export default Home;