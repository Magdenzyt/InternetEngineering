import React, { Component } from "react";
import style from "./StudentInfo.module.css";

class StudentInfo extends Component {
    render() {
        return (
            <div className={style.text}>
                <h1>Surname</h1>
                <h3>Name</h3>
                <br></br>
            </div>
        );
    }
}

export default StudentInfo;