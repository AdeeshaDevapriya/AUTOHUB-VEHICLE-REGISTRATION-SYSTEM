import React, { Component } from 'react';
import './footer.css';


export default class Footer extends Component {
  render() {
    return (
      
        <div className="main-footer">
<div className="row">

{/*coloum1*/}
        <div className="col">
        <div>
<h4>ABOUT US</h4>
<li>Founded in 1996 in Sri Lanka, AUTOHUB.com has grown from a small Dutch startup to one of the Sri Lanka’s leading digital register companies. (NASDAQ: BKNG), AUTOHUB.com’s mission is to make it easier for everyone to experience the Sri Lanka.</li>
<br></br>
</div>
</div>
{/*coloum2*/}

<div className="col">
    <div>
<h4>SOCIAL MEDIA</h4>
<li>Facebook</li>
<br></br>
<li>Twitter</li>
<br></br>
<li>instagram</li>
<br></br>
</div>
</div>

{/*colomn3*/}
<div className="col2">
<h4>AUTO HUB (PVT) LTD</h4>
</div>
<li>HOME</li>
<br></br>
<li>SERVICE</li>
<br></br>
<li>CONTACT</li>
<br></br>
</div>


<hr />
<div className="row">
<p className="col-sm"></p>
<li> @2022 AUTOHUB (PVT) LIMITED | All right reserved | Terms Of Service | Privacy</li>

</div>
</div>
    
      
    )
  }
}


