import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import './style.css';

class SigninForm extends Component {
  render() {
    return (
      <div className="formBox signInForm">
        <h2>Sign in your account</h2>
        <div className="socialCon">
          <ul>
            <li>
              <a href=""><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href=""><i class="fab fa-google-plus-g"></i></a>
            </li>
            <li>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
        <p>or use your email for registeration</p>
        <div className="innerFormBox">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="forgotPass">
              <a href="">Forgot your password?</a>
            </div>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SigninForm;
