import React, { Component } from "react";
import style from "./StudentHistory.module.css";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class StudentHistory extends Component {
  
    constructor(props) {
        super(props);
        this.state = { his: [] };
        
      }
    
      callAPI(data) {
        fetch("http://localhost:8080/student/orders",{
            method: 'GET',
            withCredentials: true,
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1AbSIsImlkIjoiNWNkZTkyNmM0MDgwM2EyNTI0MDhiMDllIiwiZXhwIjoxNTYzNjEwMzY3LCJpYXQiOjE1NTg0MjYzNjd9.1hXziQdrCDIeoVG7RQvRJUeFmkH3i3jFgd1era5qDqs',
                'Content-Type': 'application/json'
            }})
          .then(res => res.json())
          //.then(res => this.setState({ his: res }))
          .then(res => {
           console.log(res);
          }).catch(err => {
            console.error(err);
            alert('Error');
          });
        }
    
      componentDidMount() {
        let data = sessionStorage.getItem('userToken');
        console.log(data);
        this.callAPI(data);
      }
    
    render() {
        return (
            <div className = {style.text}>
        

            <h2>History</h2>
            <br></br>
            <ListGroup>
                <ListGroupItem className="justify-content-between"><Badge pill>129zł</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Kurs tańca na rurze <Badge pill>200zł</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Talon na balon <Badge pill>300zł</Badge></ListGroupItem>
            </ListGroup>
            </div>
        );
    }
}

export default StudentHistory;