import React, { Component } from "react";
import style from "./TeacherInfo.module.css";
import { Button, ButtonGroup } from 'reactstrap';


class TeacherInfo extends Component {
    render() {
        return (
            <div className={style.text}>
                <h1>Surname</h1>
                <h3>Name</h3>
                <br></br>
                <ButtonGroup>
                    <Button href="http://localhost:3000/teacher/#addAnnouncement">Add announcement</Button>
                    <Button href="http://localhost:3000/teacher/#teacherCourses">My courses</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default TeacherInfo;