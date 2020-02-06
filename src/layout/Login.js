import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Login extends Component {
	render() {
		return (
			<Form>
				<h1>Sign in</h1>
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
