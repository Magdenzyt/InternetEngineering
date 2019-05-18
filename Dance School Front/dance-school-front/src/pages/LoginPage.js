import React, { Component } from 'react';
import Login from '../components/Login';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login {...this.props}/>
      </div>
    );
  }
}

export default LoginPage;
