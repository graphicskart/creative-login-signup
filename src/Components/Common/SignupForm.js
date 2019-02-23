import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import './style.css';

class SignupForm extends Component {
  render() {
    return (
      <div className="formBox signUpForm">
        <h2>Create Account</h2>
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
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
