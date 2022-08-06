import React, { Component } from 'react'
import './viewvehicle.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer'
import Sidebar from '../sidebar/sidebar'

export default class viewvehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { Vehicle: [],
            Vehicle_Number : "",
            Current_Owner : "",
            Make  : "" ,
            Model  : "",
            Colour  : "",
            Provincial_Council : "",
            Year_of_Manufacture  : "",
            Fuel_Type   : ""
           
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:8087/vehicle/view`)
            .then((res) => {console.log("data", res);
                this.setState({
                    Vehicle : res.data
                })
            console.log(this.state.Vehicle);
            this.state.Vehicle.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }

    onSubmitAdd(){
        window.location = '/addhotel'
    }
    onSubmitSearch() {
        window.location = '/searchhotel'
    }
    navigateIntUpdate(id){
        window.location = `/updatevehicle/${id}`
    }
   
    // onSubmitReport(){
    //     window.location = '/Generatereport'
    // }

    render() {
        return ( 
            <div>
             <Sidebar/>  
             <div>
            </div> 
            <div>
            </div> 
            <div>
            </div> 
            <div className="IntContainer"> 
                <div className="container"> 
                <h1> Vehicle List </h1>
                {/* <button type="submit" class="btn btn-primary" onClick={this.onSubmitSearch}>Search Hotel</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd}>Add New Hotel</button> */}
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Vehicle Number </th>
                        <th scope="col"> Current Owner </th>
                        <th scope="col"> Make </th>
                        <th scope="col"> Model </th>
                        <th scope="col"> Colour </th>
                        <th scope="col"> Provincial Council </th>
                        <th scope="col"> Year of Manufacture </th>
                        <th scope="col"> Fuel Type </th>
                        <th scope="col">  </th>
                        <th scope="col">  </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.Vehicle.map((item,key) =>(
                 <tr>
     <td> {item.Vehicle_Number} </td>
     <td> {item.Current_Owner} </td>
     <td> {item.Make} </td> 
     <td> {item.Model} </td>
     <td> {item.Colour}</td>
     <td> {item.Provincial_Council} </td>
     <td> {item.Year_of_Manufacture} </td>
     <td> {item.Fuel_Type} </td>
     <td> <button onClick={() => deleteitem(item._id)} class="btn btn-outline-success"> Delete </button></td>
     <td> <button class="btn btn-outline-success" onClick={() =>{this.navigateIntUpdate(item._id)}} > Edit</button> </td>
     {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
     </tr>
              ))}
             </tbody>
                
                </table>
                {/* <button type="submit" class="btn btn-primary" onClick={this.onSubmitReport}>hotel report</button> */}
                
                </div>
           </div>
           <div>
           
            </div>
            <div>
           
            </div>
            
            <Footer/>
           </div>
           
         )   
    }
}


const deleteitem = (id) => {
    axios.delete(`http://localhost:8087/vehicle/delete/${id}`)
    .then(res => {
      console.log("vehicle successfully deleted");
  alert("vehicle successfully deleted!");
  window.location = "/viewvehicle";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })
     

     }