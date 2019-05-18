import React, { Component } from 'react';
import style from './Courses.module.css';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = { courses: [],
                  teachers: [],
                  CandT: [] };
  }

  callAPICourses() {
    fetch("http://localhost:8080/courses")
      .then(res => res.json())
      .then(res => this.setState({ courses: res }))
      .catch(err => err);
  }

  callAPITeachers() {
    fetch("http://localhost:8080/teachers")
      .then(res => res.json())
      .then(res => this.setState({ teachers: res }))
      .catch(err => err);
  }

  connectTeachersCourses(){
    for(var i = 0; i < this.state.courses.length; i++){
      for(var j = 0; j < this.state.teachers.length; j++){
        if(this.state.courses[i].teachersId == this.state.teachers[j].id){
          this.state.CandT[i] = {courseName: this.state.courses[i].name,
                                 coursePrice: this.state.courses[i].price,
                                 courseDescription: this.state.courses[i].description,
                                 courseTeacherName: this.state.teachers[j].name,
                                 courseTeacherSurname: this.state.teachers[j].surname}
        }
      }
    }
  }
  
  componentDidMount() {
    this.callAPICourses();
    this.callAPITeachers();
  }

  render(){
    this.connectTeachersCourses();
      return(
        
    <CardColumns className={style.text}>
      {this.state.CandT.map(course => (
      <Card>
        <CardBody>
          <CardTitle><h2>{course.courseName}</h2></CardTitle>
          <CardSubtitle><h5>{course.courseTeacherName} {course.courseTeacherSurname}</h5></CardSubtitle>
          <CardText>{course.courseDescription}
          <br></br>
          <br></br>
          <h5>{course.coursePrice} PLN</h5></CardText>
          <Button href="/afterBuy">Buy now</Button>
        </CardBody>
      </Card>
      ))}
    </CardColumns>
  );
};
}

export default Courses;