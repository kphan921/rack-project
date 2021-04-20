import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import Camera from './Camera'
// import Len from './Len'

const Home=() => {
    return (
        <div>
            <Button component={Link} to="/cameras"> Cameras </Button>
        </div>
    )
}

export default Home;