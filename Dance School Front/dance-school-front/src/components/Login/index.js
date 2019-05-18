import React, { Component } from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { createLoginPost } from '../../actions/loginPostActions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.username) {
          return this.setState({ error: 'Pole E-MAIL wymagane' });
        }
    
        if (!this.state.password) {
          return this.setState({ error: 'Pole HASŁO wymagane' });
        }
      
        createLoginPost(this.state).then(() => this.props.history.push('/student'));
      }
    
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
              <h1>Sign in</h1>
              <br />
              <br />
              <label><b>E-mail </b></label>
              <input className = {style.inputBox} type="email" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
              <br />
              <br />
              <label><b>Password  </b></label>
              <input className = {style.inputBox} type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
              <br />
              <br />
              <br/>
              <button className = {style.inputButton} type="submit" data-test="submit">Sign in</button>
              <br />
              <br />
              <h3><Link to="/register" className={style.link} >Click here to register</Link></h3>
              <br />
              <br />
            </form>
          </div>
        );
      }
}

export default Login;
