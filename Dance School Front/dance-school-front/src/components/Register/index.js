import React, { Component } from 'react';
import style from './Register.module.css';
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/postActions';

class Register extends Component {
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

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.name) {
      return this.setState({ error: 'Name required' });
    }

    if (!this.state.surname) {
      return this.setState({ error: 'Surname required' });
    }

    if (!this.state.username) {
      return this.setState({ error: 'Username required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password required' });
    }

    if (!(this.state.password === this.state.confirmPassword)) {
      return this.setState({ error: 'Not the same password!!' });
    }
    console.log(this.state);
    console.log(this.props);
    createPost(this.state,'http://localhost:8080/user/register').then(() => this.props.history.push('/thankYou'));
  }

  handleNameChange(evt) {
    this.setState({
      name: evt.target.value,
    });
  };

  handleSurnameChange(evt) {
    this.setState({
      surname: evt.target.value,
    });
  };

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleConfirmPasswordChange(evt) {
    this.setState({
      confirmPassword: evt.target.value,
    });
  }

  render() {
    return (
      <div className={style.text}>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <h1>Register</h1>
          <br />
          <br />
          <label><b>Name   </b></label>
          <input className={style.inputBox} data-test="name" value={this.state.name} onChange={this.handleNameChange} />
          <br />
          <br />
          <label><b>Surname  </b></label>
          <input className={style.inputBox} data-test="surname" value={this.state.surname} onChange={this.handleSurnameChange} />
          <br />
          <br />
          <label><b>E-mail   </b></label>
          <input className={style.inputBox} type="email" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          <br />
          <br />
          <label><b>Password   </b></label>
          <input className={style.inputBox} type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          <br />
          <br />
          <label><b>Confirm password   </b></label>
          <input className={style.inputBox} type="password" data-test="password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
          <br />
          <br />
          <br />
          <button className={style.inputButton} type="submit" data-test="submit">Register now</button>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Register;
