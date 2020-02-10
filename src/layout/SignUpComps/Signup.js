import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

export default class Signup extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		last_name: '',
		first_name: '',
	}

	handleOnChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	loginSubmit = async e => {
		e.preventDefault()
		await axios
			.post('http://localhost:3000/voters', {
				email: this.state.email,
				password: this.state.password,
			})
			.then(res => {
				// this.props.setLoggedInUser(res.data.user, res.data.token)
				// this.props.history.push('/')
			})
		// .catch(error => {
		// 	if (error.response) {
		// 		this.props.history.push('/login')
		// 		alert('Password or email was incorrect, try again')
		// 		this.setState({ email: '', password: '' })
		// 	}
		// })
	}

	render() {
		const { email, password, username, first_name, last_name } = this.state
		return (
			<Form onSubmit={this.loginSubmit}>
				<h1>Register</h1>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' onChange={this.handleOnChange} value={first_name} />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' onChange={this.handleOnChange} value={last_name} />
				</Form.Field>
				<Form.Field>
					<label>Username</label>
					<input placeholder='Username' onChange={this.handleOnChange} value={username} />
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' onChange={this.handleOnChange} value={email} />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						type='password'
						placeholder='Password'
						onChange={this.handleOnChange}
						value={password}
					/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}
}
