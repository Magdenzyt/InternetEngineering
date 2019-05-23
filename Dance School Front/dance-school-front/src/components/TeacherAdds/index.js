import React, { Component } from "react";
import style from "./TeacherAdds.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TeacherAdds extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          surname: '',
          username: '',
          password: '',
          confirmPassword: '',
          error: '',
        };
    
        this.handleTextChange = this.handlePassChange.bind(this);
    }
    render() {
        return (
            <div className={style.text} id="addAnnouncement">
                <Form>
                    <FormGroup>
                        <h3><Label for="exampleText">Add announcement</Label></h3>
                        <br></br>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <br></br>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default TeacherAdds;