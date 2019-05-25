import React, { Component } from 'react';
import style from './AfterBuy.module.css';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
    
    render() {
        return (
          <div className={style.text}>            
              <h1>Thank You for buying this course!</h1>
              <br />
              <br />    
              <h3>You have to pay: {localStorage.getItem('price').substring(0,6)}</h3>         
              <br />
              <br />
              <h3>Account number: 1234 5678 9876 5432</h3>   
              <br />
              <br />   
          </div>
        );
      }
}

export default ThankYou;
