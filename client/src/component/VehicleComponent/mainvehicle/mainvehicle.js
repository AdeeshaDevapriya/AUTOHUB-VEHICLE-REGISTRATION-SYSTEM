import React, { Component } from 'react'
import './mainvehicle.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar'
import Footer from '../footer/footer'


export default class mainvehicle extends Component {
    onSubmitIntadd(){
        window.location = '/addvehicle'
    }
    onSubmitIntlist() {
        window.location = '/searchhotel'
    }

    onSubmitDetail() {
        window.location = '/viewvehicle'
    }
    
    render() {
        return ( 
            <div>
                <Sidebar/>
                
            <div className="IntContainer"> 
                <div className="container"> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1> WELCOME TO AUTOHUB VEHICLE REGISTRATION </h1><br></br>
                <p1>More than any other invention, the automobile has had a significant impact on all aspects of life in Sri lanka. Initially referred to as a “horseless carriage,” the automobile presented many challenges for the state, and the first 50 years of automobile legislation were focused on creating laws, rules, and guidelines to help ensure that all Sri lankans would be safe on the roads.</p1>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary" title="To enter you vehicle details" onClick={this.onSubmitIntadd}>REGISTER MY VEHICLE</button>
                <br></br>
                
                
                </div>
                
                <button type="submit" class="btn btn-primary" title="For vehicle details" onClick={this.onSubmitDetail}>ALL VEHICLE DETAILS</button>
                <br></br>
                <br></br>
                <br></br>
                
           </div>
           <div>
           <Footer/>
            </div>
           </div>
         )   
    }
}
