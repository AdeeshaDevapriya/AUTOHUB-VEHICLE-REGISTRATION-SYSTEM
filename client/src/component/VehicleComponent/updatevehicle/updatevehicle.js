import React, { useState } from 'react'
import axios from 'axios';
import Footer from '../footer/footer'
import './updatevehicle.css';
import Sidebar from '../sidebar/sidebar'

const Updatevehicle = (prop) => {

    const id = prop.match.params.id;

    console.log(id);

    const [IUpdate, setIUpdate] = useState([]);

    axios.get(`http://localhost:8087/vehicle/view/${id}`)
    .then((res) => setIUpdate(res.data))
    .catch((err) => console.log(err.message));
    console.log(IUpdate);

    const [Vehicle_Number, setVehicle_Number] = useState("");
    const [Current_Owner, setCurrent_Owner] = useState("");
    const [Make, setMake] = useState("");
    const [Model, setModel] = useState("");
    const [Colour, setColour] = useState("");
    const [Provincial_Council, setProvincial_Council] = useState("");
    const [Year_of_Manufacture, setYear_of_Manufacture] = useState("");
    const [Fuel_Type, setFuel_Type] = useState("");

    const getVehicleDetails = (e) => {
        e.preventDefault();
        const datasetInt = {
            Vehicle_Number,
            Current_Owner,
            Make,
            Model,
            Colour,
            Provincial_Council,
            Year_of_Manufacture,
            Fuel_Type



        }

        // console.log(datasetInt);

        axios.put(`http://localhost:8087/vehicle/update/${id}`, datasetInt)
        .then(() => alert ("Hotel Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/viewvehicle";
    }

    

    return(

<div>
<Sidebar/>
        <div className="container">
            
            <h1> Update Vehicle Details</h1>
        <div className="formUpdateVehicle">
            <form onSubmit={getVehicleDetails}>
                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Vehicle_Number</label>
                    <input type="text" 
                    className="form-control"
                    name="category"
                    placeholder="Enter Vehicle Number"
                    defaultValue={IUpdate.Vehicle_Number}
                    onChange = {(e) =>  setVehicle_Number(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Current_Owner</label>
                    <input type="text" 
                    className="form-control"
                    name="RoomId"
                    placeholder="Enter Current Owner"
                    defaultValue={IUpdate.Current_Owner}
                    onChange = {(e) => setCurrent_Owner(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Make</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Make"
                    defaultValue={IUpdate.Make}
                    onChange = { (e)=> setMake(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Model</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Model"
                    defaultValue={IUpdate.Model}
                    onChange = { (e)=> setModel(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Colour</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Colour"
                    defaultValue={IUpdate.Colour}
                    onChange = { (e)=> setColour(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Provincial_Council</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Provincial Council"
                    defaultValue={IUpdate.Provincial_Council}
                    onChange = { (e)=> setProvincial_Council(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Year_of_Manufacture</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Year of Manufacture"
                    defaultValue={IUpdate.Year_of_Manufacture}
                    onChange = { (e)=> setYear_of_Manufacture(e.target.value)}
                    />
                </div>

                <div className="vehicleAdd">
                    <label for = "category" className = "form-label">Fuel_Type</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Fuel Type"
                    defaultValue={IUpdate.Fuel_Type}
                    onChange = { (e)=> setFuel_Type(e.target.value)}
                    />
                </div><br/>

                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update Vehicle Details
                    </i>
                </button>

            </form>
            </div>
        </div>
        <div>
        <Footer/>
            </div>
        </div>
    )
}

export default Updatevehicle;