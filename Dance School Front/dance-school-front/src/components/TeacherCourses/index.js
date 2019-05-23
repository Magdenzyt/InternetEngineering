import React, { Component } from "react";
import style from "./TeacherCourses.module.css";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class TeacherCourses extends Component {
    
    render() {
        return (
            <div className = {style.text} id="teacherCourses">
            <h2>MyCourses</h2>
            <br></br>
            <ListGroup>
                <ListGroupItem>Kurs1</ListGroupItem>
                <ListGroupItem>Kurs tańca na rurze</ListGroupItem>
                <ListGroupItem>Talon na balon</ListGroupItem>
            </ListGroup>
            </div>
        );
    }
}

export default TeacherCourses;