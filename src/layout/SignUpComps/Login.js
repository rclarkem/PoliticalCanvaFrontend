import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3000/logins', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.setLoggedInUser(res.data.user, res.data.token);
        this.props.history.push('/');
      })
      .catch((error) => {
        if (error.response) {
          this.props.history.push('/login');
          alert('Password or email was incorrect, try again');
          this.setState({ email: '', password: '' });
        }
      });
  };

  render() {
    // console.log(this.props)
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.loginSubmit}>
        <h1>Sign in</h1>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' name='email' required value={email} onChange={this.handleOnChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            value={password}
            onChange={this.handleOnChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
export default withRouter(Login);
