import React, { Component } from 'react';
import Courses from '../components/Courses';

class CoursesPage extends Component {
  render() {
    return (
      <div>
        <Courses {...this.props}/>
      </div>
    );
  }
}

export default CoursesPage;
