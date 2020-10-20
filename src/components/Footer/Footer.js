import React, { Component } from 'react';
import logo from '../Footer/logo.png';
import fb from '../Footer/fb.png';
import tw from '../Footer/tw.png';
import ln from '../Footer/li.png';
import pt from '../Footer/pt.png';
import './Footer.css'

import { SocialIcon } from 'react-social-icons';
const email={
    width: "350px",
    background:"gray",
    color:"white",
    border:"none",
    padding:"5px",
    outline:"none",
};
class Footer extends Component {
    render() {
        return(
            <footer className="containerx">
 
                <div>    
                    <img className="logo" src={logo} alt="Logo" /> 
                </div>
                <div className="item">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="itemx">
                <h2> FOLLOW US </h2>
                <img className="ico" src={fb} alt="Logo" /> 
                <img className="ico" src={tw} alt="Logo" /> 
                <img className="ico" src={ln} alt="Logo" /> 
                <img className="ico" src={pt} alt="Logo" /> 
                </div>
                <div className="itemx">
                <h2> NEWSLETTER </h2>
                <h3> - </h3>
                <input type="text" id="email" placeholder="E-mail"  style={email}></input>
                </div>
            </footer>
        )
    }
}

export default Footer