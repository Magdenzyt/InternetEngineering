import React, { Component } from "react";
import style from "./StudentInfo.module.css";
import {Button} from 'reactstrap';

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "",
                        surname:"" };
        
      }
    
      callAPI(data) {
        fetch("http://localhost:8080/user/current",{
            method: 'GET',
            withCredentials: true,
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Token '+ data,
                'Content-Type': 'application/json'
            }})
          .then(res => res.json())
          .then(res => this.setState({name: res["user"]["name"],
                                        surname: res["user"]["surname"]}))
          /*.then(res => {
          console.log(res["user"]["name"]);
          })*/.catch(err => {
            console.error(err);
            alert('Error');
          });
        }
    
      componentDidMount() {
        let data = sessionStorage.getItem('userToken');
        console.log(data);
        this.callAPI(data);
        console.log(this.state.inf);
      }
      
    render() {
        return (
            
            <div className={style.text}>
                
                <h1>{this.state.name}</h1>
                <h3>{this.state.surname}</h3>
                <br></br>
                <Button href="http://localhost:3000/login">Log out</Button>
                <br></br>
            </div>
            
        );
    }
}

export default StudentInfo;