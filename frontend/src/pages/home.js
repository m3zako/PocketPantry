import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../pages/login";

import useStyles from './styles';

import Navbar from "../Navbar";
import { BrowserRouter as Router} from "react-router-dom";

//import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import white from '../images/white.png';
import pantry from '../images/pantry.jpg';
import pocketPantryLogo from '../images/pocketPantryLogo.png';

const Home =  () => {
    const classes = useStyles();
    return (
        <>

        <div className = "App">
            <Parallax pages = {1}>
                <ParallaxLayer factor = {1} style = {{backgroundImage: `url(${pantry})`, backgroundSize: 'cover',}}>
                <div className={classes.mainDiv}>
            <h1 className = {classes.title}>Login</h1>
            <input className = {classes.loginUsernameBox} placeholder="Username" /><br />
            <input className = {classes.loginPasswordBox} placeholder="Password"/><br />
            <button className = {classes.loginButton} onclick="doLogin();">Sign In</button>
            <p className = {classes.forgotPass} >forgot password?</p>
        </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    
        </>
    )
}

export default Home;