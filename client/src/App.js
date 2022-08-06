// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';



import addvehicle from "./component/VehicleComponent/addvehicle/addvehicle";
import mainvehicle from "./component/VehicleComponent/mainvehicle/mainvehicle";
import viewvehicle from "./component/VehicleComponent/viewvehicle/viewvehicle";
import updatevehicle from "./component/VehicleComponent/updatevehicle/updatevehicle";

import Sidebar from "./component/VehicleComponent/sidebar/sidebar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
       
          <Route extract path = '/addvehicle' component={addvehicle}/>
          <Route extract path = '/mainvehicle' component={mainvehicle}/>
          <Route extract path = '/viewvehicle' component={viewvehicle}/>
          <Route extract path = '/updatevehicle/:id' component={updatevehicle}/>
          
          <Route extract path = '/sidebar' component={Sidebar}/>

        </Switch>
      </Router>      
    </div>
  );
}

export default App;
