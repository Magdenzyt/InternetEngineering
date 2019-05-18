import React, { Component } from 'react';
//import axios from 'axios';
import TeacherInfo from '../components/TeacherInfo';
import TeacherAdds from '../components/TeacherAdds';
import TeacherCourses from '../components/TeacherCourses';
import stoper from '../assets/stoper.png';


class TeacherPage extends Component {
  render() {
    return (
      <div>
        <TeacherInfo />
        <center><img src={stoper} height = "100" alt="" /></center>
        <TeacherAdds />
        <center><img src={stoper} height = "100" alt="" /></center>
        <TeacherCourses/>
      </div>
    );
  }
}

export default TeacherPage;
