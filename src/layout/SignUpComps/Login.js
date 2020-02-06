import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Login extends Component {
	state = {
		email: '',
		password: '',
	}

	handleOnChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	loginSubmit = e => {
		e.preventDefault()
		console.log('submitted', this.state)
	}

	render() {
		const { email, password } = this.state
		return (
			<Form onSubmit={this.loginSubmit}>
				<h1>Sign in</h1>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder='Email'
						name='email'
						value={email}
						onChange={this.handleOnChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={this.handleOnChange}
					/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}
}
