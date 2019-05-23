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
                'Authorization': 'Token '+ data,
                'Content-Type': 'application/json'
            }})
          .then(res => res.json())
          .then(res => this.setState({ his: res }))
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
            {this.state.his.map(hi => (
            <ListGroup>
                <ListGroupItem className="justify-content-between">{hi.name} <Badge pill>{hi.price}zł</Badge></ListGroupItem>
            </ListGroup>
            ))}
            </div>
        );
    }
}

export default StudentHistory;