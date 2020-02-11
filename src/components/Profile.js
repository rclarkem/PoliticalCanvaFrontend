import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import ContentEditable from 'react-contenteditable'
import { Button } from 'react-bootstrap'

export default class Profile extends Component {
	state = {
		candidateID: '',
	}

	handleOnChange = e => {
		this.setState({
			candidateID: e.target.value,
		})
	}

	submitCandidate = e => {
		e.preventDefault()
		// this.props.updateUserCandidate(this.state)
		fetch(`http://localhost:3000/users/${this.props.userInfo.id}/edit`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: this.props.token,
			},
			body: JSON.stringify({
				candidate_id: this.state.candidateID,
			}),
		})
			.then(response => response.json())
			.then(response => {
				this.setState({
					disabled: true,
				})
				this.props.updateUserCandidate()
				this.props.history.push('/')
			})
	}

	render() {
		const { candidateID, disabled } = this.state
		const { userInfo } = this.props
		console.log(this.props, disabled)
		return (
			<Item.Group>
				<Item>
					<Item.Image
						size='small'
						src='https://react.semantic-ui.com/images/wireframe/image.png'
					/>

					<Item.Content>
						<Item.Header as='a'>{`${userInfo.first_name} ${userInfo.last_name}`}</Item.Header>
						<Item.Description>
							<form onSubmit={this.submitCandidate}>
								{this.props.userInfo.candidate_id !== null
									? `${userInfo['candidate?'].first_name} ${userInfo['candidate?'].last_name}`
									: null}
								<br></br>
								<input
									placeholder='enter candidate code'
									name={candidateID}
									onChange={this.handleOnChange}
									value={candidateID}
									disabled
									type='text'
								></input>
								<p>Email: {userInfo.email}</p>
								<p>Username: {userInfo.username}</p>
								<Button type='submit'>Submit</Button>
							</form>
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
		)
	}
}
