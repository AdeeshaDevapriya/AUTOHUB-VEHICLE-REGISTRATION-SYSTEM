import React, { Component } from 'react';
import './sidebar.css';
import imgsint22 from '../../../Images/Group 2.png'


export default class Sidebar extends Component {
  render() {
    return (
      
      <div class="content flex_space">
        <div class="logo">
        <img className="imgsint22" src={imgsint22} alt="logo" ></img>
        </div>
    <div class="navlinks">
      <ul id="menulist">
        <li><a title="REGISTRATION" class="active" href="">REGISTER</a></li>
        <li><a title="NEWS" href="#NEWS">NEWS</a></li>
        <li><a title="CONTACT US" href="#CONTACT US">CONTACT US</a></li>
        <li><a title="ABOUT US" href="#ABOUT US">ABOUT US</a></li>
        </ul>
        
        </div>
        <div>
<br></br>

        <br></br>
        <br></br>
        </div>
    </div>
    
      
      
    )
  }
}


