import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class Signup extends Component {
	render() {
		return (
			<Form>
				<h1>Register</h1>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' />
				</Form.Field>
				<Form.Field>
					<label>Username</label>
					<input placeholder='Username' />
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type='password' placeholder='Password' />
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}
}
