import React, { Component } from "react";
import style from "./MainContact.module.css";
import { Jumbotron, Button } from 'reactstrap';

class MainContact extends Component{
  render(){
    return (
      <div className={style.text} id="Contact">
      <Jumbotron>
        <h1>Contact us!</h1>
        <br></br>
        <p className="lead">Earlsfort Terrace, Saint Kevin's, Dublin, D02 N527, Ireland</p>
        <hr className="my-2" />
        <p>+353 123 45 45</p>
        <br></br>
        <p className="lead">
          <Button color="secondary" target="_blank" rel="noopener noreferrer" href="https://www.google.pl/maps/place/National+Concert+Hall,+Earlsfort+Terrace,+Saint+Kevin's,+Dublin+2,+Irlandia/@53.3347201,-6.2614184,17z/data=!3m1!4b1!4m5!3m4!1s0x48670ea1fe7163e5:0x6e2341fbb34f499e!8m2!3d53.3347169!4d-6.2592297">Show Map</Button>
        </p>
      </Jumbotron>
      
      </div>
    );
  }
}

export default MainContact;