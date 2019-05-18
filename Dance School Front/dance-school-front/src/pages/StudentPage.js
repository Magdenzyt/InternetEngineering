import React, { Component } from 'react';
//import axios from 'axios';
import StudentInfo from '../components/StudentInfo';
import StudentHistory from '../components/StudentHistory';
import stoper from '../assets/stoper.png';


class StudentPage extends Component {
  render() {
    return (
      <div>
        <StudentInfo />
        <center><img src={stoper} height = "100" alt="" /></center>
        <StudentHistory />
      </div>
    );
  }
}

export default StudentPage;
