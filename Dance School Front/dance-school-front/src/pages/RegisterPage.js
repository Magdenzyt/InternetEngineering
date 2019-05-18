import React, { Component } from 'react';
import Register from '../components/Register';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Register {...this.props} />
      </div>
    );
  }
}

export default RegisterPage;
