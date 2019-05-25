import React, { Component } from 'react';
import style from './Courses.module.css';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

class Courses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      teachers: [],
      CandT: [],
      nr:'',
    };
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
    console.log(this.state.courses);
    console.log(this.state.teachers);
    for (var i = 0; i < this.state.courses.length; i++) {
      for (var j = 0; j < this.state.teachers.length; j++) {
        if (this.state.courses[i].teacherId === this.state.teachers[j].uid) {
          this.state.CandT[i] = {
            courseID: this.state.courses[i]._id,
            courseName: this.state.courses[i].name,
            coursePrice: this.state.courses[i].price,
            courseDescription: this.state.courses[i].description,
            courseTeacherName: this.state.teachers[j].name,
            courseTeacherSurname: this.state.teachers[j].surname
          }
        }
      }
    }
    console.log(this.state.CandT);
  }

  componentDidMount() {
    this.callAPICourses();
    this.callAPITeachers();
  }

  handleClick = (x) => {

    console.log(x["courseID"]);
    let data = sessionStorage.getItem('userToken');
    console.log(data);
  
    fetch('http://localhost:8080/student/makeOrder', {
      method: 'POST',
      body: JSON.stringify({ courseId: x["courseID"] }),
      withCredentials: true,
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Token ' + data,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
        console.log(res['price']);
        let tmp = res['price'];
        localStorage.setItem('price',tmp);
    }).catch(err => {
      console.error(err);
      alert('Error');
    });
  };

  render() {
    this.connectTeachersCourses();
    let data = sessionStorage.getItem('userToken');
    let a = '';
    if (data)
      a = '/afterBuy';
    else
      a = '/login';
    return (
      <CardColumns className={style.text}>
        {this.state.CandT.map(course =>(
          <Card>
            <CardBody>
              <CardTitle><h2>{course.courseName}</h2></CardTitle>
              <CardSubtitle><h5>{course.courseTeacherName} {course.courseTeacherSurname}</h5></CardSubtitle>
              <CardText>{course.courseDescription}
                <br></br>
                <br></br>
                <h5>{course.coursePrice} PLN</h5></CardText>
              <Button href={a} onClick={this.handleClick.bind(null, course)}>Buy now</Button>
            </CardBody>
          </Card>
        ))}
      </CardColumns>
    );
  };
}

export default Courses;