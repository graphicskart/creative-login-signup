import React, { Component } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import './style.css';

class SignupLogin extends Component {
  constructor(props){
    super(constructor);
    this.state = {
      isSignUp: true
    }
  }

  switchView(){
    if (this.state.isSignUp) {
      this.setState({isSignUp: false})
    } else {
      this.setState({isSignUp: true})
    }
    
  }
  render() {
    return (
      <div className={!this.state.isSignUp ? 'signupPage signInView' : 'signupPage'}>
        <div className="signupCon">
          <div className="slidingCon">
            <div className="forSingin">
              <h2>Welcome Back</h2>
              <p>To keep connected with us please login your personal info</p>
              <button onClick={this.switchView.bind(this)}>Sign in</button>
            </div>
            <div className="forSingup">
              <h2>Hello Friends!</h2>
              <p>Enter your personal detail and start journey with us</p>
              <button onClick={this.switchView.bind(this)}>Sign up</button>
            </div>
          </div>
          <div className="formContainer">
            <SignupForm />
            <SigninForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupLogin;
