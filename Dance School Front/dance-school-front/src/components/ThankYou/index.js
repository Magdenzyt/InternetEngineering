import React, { Component } from 'react';
import style from './ThankYou.module.css';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
    
    render() {
        return (
          <div className={style.text}>            
              <h1>Thank You for registering!</h1>
              <br />
              <br />              
              <h3><Link to="/login" className={style.link} >Click here to log in</Link></h3>
              <br />
              <br />
          </div>
        );
      }
}

export default ThankYou;
