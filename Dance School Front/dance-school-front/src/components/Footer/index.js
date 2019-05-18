import React, { Component } from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import Container from '../Container';

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <Container>
          <div className={style.footer__container}>
        
           <center>Website copyright MagdaWu. All rights reserved.</center>           
           
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
