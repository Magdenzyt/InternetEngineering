import React, { Component } from 'react';
//import axios from 'axios';
import Main from '../components/Main';
import MainAnnouncements from '../components/MainAnnouncements';
import MainContact from '../components/MainContact';
import stoper from '../assets/stoper.png';


class MainPage extends Component {
  render() {
    return (
      <div>
        <Main />
        <center><img src={stoper} height = "100" alt="" /></center>
        <MainAnnouncements />
        <center><img src={stoper} height = "100" alt="" /></center>
        <MainContact />
      </div>
    );
  }
}

export default MainPage;
