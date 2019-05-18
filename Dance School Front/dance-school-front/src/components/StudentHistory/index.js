import React, { Component } from "react";
import style from "./StudentHistory.module.css";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class StudentHistory extends Component {
    render() {
        return (
            <div className = {style.text}>
            <h2>History</h2>
            <br></br>
            <ListGroup>
                <ListGroupItem className="justify-content-between">Kurs1 <Badge pill>129zł</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Kurs tańca na rurze <Badge pill>200zł</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Talon na balon <Badge pill>300zł</Badge></ListGroupItem>
            </ListGroup>
            </div>
        );
    }
}

export default StudentHistory;