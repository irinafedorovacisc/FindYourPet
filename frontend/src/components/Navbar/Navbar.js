import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../Images/paw.png'

export default class Navbar extends Component {
  render() {
    return (  
    <div>
      <ul className = "topnav">
        <li><a className = "active" href="#home"><img src={logo} className="App-logo" alt="logo" id="logo"/>Home</a></li>        
        <li><a href="#news">Useful Resources</a></li>  
        <li className="right"><a href="#about">Register | Sign In</a></li>
      </ul>      
    </div> 	 
    )
  }
}
