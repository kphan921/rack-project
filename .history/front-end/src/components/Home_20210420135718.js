import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Home=() => {
    return (
        <div>
            <Button component={Link} to="/cameras"> Cameras </Button>
            <Button component={Link} to="/lens"> Lens </Button>
        </div>
    )
}

export default Home;