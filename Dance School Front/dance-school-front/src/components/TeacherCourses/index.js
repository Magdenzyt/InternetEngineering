import React, { Component } from "react";
import style from "./TeacherCourses.module.css";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class TeacherCourses extends Component {
    constructor(props) {
        super(props);
        this.state = { cour: [] };        
      }
      callAPI() {
        let data = sessionStorage.getItem('userToken');
          
        fetch("http://localhost:8080/teacher/courses",{
          method: 'GET',
          withCredentials: true,
          credentials: 'same-origin',
          headers: {
              'Authorization': 'Token '+ data,
              'Content-Type': 'application/json'
          }})
        .then(res => res.json())
        .then(res => this.setState({ cour: res }))
        .then(res => {
         console.log(res);
        }).catch(err => {
          console.error(err);
          alert('Error');
        });
      }
        componentDidMount() {
            this.callAPI();
          }
        
    render() {
        return (
            <div className = {style.text} id="teacherCourses">
            <h2>MyCourses</h2>
            <br></br>
            {this.state.cour.map(co => (
            <ListGroup>
                <ListGroupItem>{co.name}</ListGroupItem>
            </ListGroup>
            ))}
            </div>
        );
    }
}

export default TeacherCourses;