import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import useStyles from './styles';
import pantry from '../images/pantry.jpg';

//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import { Parallax, ParallaxLayer} from '@react-spring/parallax';

const Register =  () => {
    const classes = useStyles();
    return (
        <div>
        <Parallax pages = {1}>
                <ParallaxLayer factor = {1} style = {{backgroundImage: `url(${pantry})`, backgroundSize: 'cover',}}>
        <div className={classes.mainDiv}>
            <h1 className = {classes.title}>Register</h1>
            <input className = {classes.loginUsernameBox} placeholder="Email" /><br />
            <input className = {classes.loginPasswordBox} placeholder="Confirm Email"/><br />
            <input className = {classes.loginUsernameBox} placeholder="Password" /><br />
            <input className = {classes.loginPasswordBox} placeholder="Confirm Password"/><br />
            <button className = {classes.loginButton} onclick="doLogin();">Register</button>
        </div>
        </ParallaxLayer>
        </Parallax>
        </div>
        
    )
}

export default Register;