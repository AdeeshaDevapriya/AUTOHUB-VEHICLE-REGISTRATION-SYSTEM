import React, {Component} from 'react'
import './addvehicle.css';
import axios from 'axios';
import Sidebar from '../sidebar/sidebar'
import Footer from '../footer/footer'

export default class addvehicle extends Component {

constructor(props) {
    super(props);
    this.state = {
        Vehicle_Number : "",
        Current_Owner : "",
        Make : "",
        Model : "",
        Colour : "",
        Provincial_Council : "",
        Year_of_Manufacture : "",
        Fuel_Type : "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this .onSubmit.bind(this);
}

onChange(e) {
    this.setState({[e.target.id]: e.target.value});
}


onSubmit = async (e) => {
    e.preventDefault();
    const datasetInt = {
        Vehicle_Number : this.state.Vehicle_Number,
        Current_Owner : this.state.Current_Owner,
        Make : this.state.Make,
        Model : this.state.Model,
        Colour : this.state.Colour,
        Provincial_Council : this.state.Provincial_Council,
        Year_of_Manufacture : this.state.Year_of_Manufacture,
        Fuel_Type : this.state.Fuel_Type,
    }
    console.log(datasetInt);
        

        
    axios.post(`http://localhost:8087/vehicle/add`, datasetInt)
    .then(res =>{
        console.log(res);
        alert("Vehicle successfully added!");
      window.location = "/mainvehicle";
    }).catch((err) =>{
        console.log("Error",err);
        alert("Fields are empty!");
    }) 
}

render() {
        
    return (
      <div>
        <Sidebar/>
        <div>
        
            </div>
        <div className ="container">
        <div className="addvehicle">
        
        <form className="addvehicle">
           
<div class="form-group">
<h1>ADD MY VEHICLE</h1>  
<label for="Vehicle_Number">Vehicle Number</label>
<input type="text" class="form-control" id="Vehicle_Number" onChange={this.onChange} placeholder="Enter Vehicle Number"/>

<label for="Current_Owner">Current Owner</label>
<input type="text" class="form-control" id="Current_Owner" onChange={this.onChange} placeholder="Enter Current Owner"/>

<label for="Make">Make</label>
<input type="text" class="form-control" id="Make" onChange={this.onChange} placeholder="Enter Make"/>

<label for="Model">Model</label>
<input type="text" class="form-control" id="Model" onChange={this.onChange} placeholder="Enter Model"/>

<label for="Colour">Colour</label>
<input type="text" class="form-control" id="Colour" onChange={this.onChange} placeholder="Enter Colour"/>

<label for="Provincial_Council">Provincial Council</label>
<input type="text" class="form-control" id="Provincial_Council" onChange={this.onChange} placeholder="Enter Provincial Council"/>

<label for="Year_of_Manufacture">Year of Manufacture</label>
<input type="text" class="form-control" id="Year_of_Manufacture" onChange={this.onChange} placeholder="Enter Year of Manufacture"/>

<label for="Fuel_Type">Fuel Type</label>
<input type="text" class="form-control" id="Fuel_Type" onChange={this.onChange} placeholder="Enter Fuel Type"/>

<br></br>
</div>
<br></br>
<button type="submit" class="btn btn-primary" onClick={this.onSubmit}>ADD VEHICLE</button>
</form>

     </div>  
                  
         </div>
         
         
         
         <div>
         <Footer/>
        
        </div>
         
        
         </div>
         
         
    )
}


}