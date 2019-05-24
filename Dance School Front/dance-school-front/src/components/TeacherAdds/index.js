import React, { Component } from "react";
import style from "./TeacherAdds.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createRegisterPost } from '../../actions/postActions';

class TeacherAdds extends Component {
    constructor() {
        super();
        this.state = {
            add: '',
            error: ''
        };

        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({ error: '' });
    }
    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.add) {
            return this.setState({ error: 'Text required' });
        }

        console.log(this.state);
        console.log(this.props);
        
        let data = sessionStorage.getItem('userToken');
        var form = document.getElementById("myForm");

        fetch('http://localhost:8080/teacher/ad',{
            method: 'POST',
            body: JSON.stringify({ text: this.state.add }),
            withCredentials: true,
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Token ' + data,
                'Content-Type': 'application/json'
            }
        }).catch(err => {
            console.error(err);
            alert('Error');
        }).then(() => this.setState({ add: ''}));
      

    }

    handleAddChange(evt) {
        this.setState({
            add: evt.target.value,
        });
    };
    render() {
        return (
            <div className={style.text} id="addAnnouncement">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <h3><Label for="exampleText">Add announcement</Label></h3>
                        <br></br>
                        <Input id="myForm" type="textarea" name="text" id="exampleText" data-test="add" value={this.state.add} onChange={this.handleAddChange} />
                    </FormGroup>
                    <br></br>
                    <Button type="submit" data-test="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default TeacherAdds;