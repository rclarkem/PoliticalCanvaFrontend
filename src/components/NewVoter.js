import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Form, FormButton, Header } from 'semantic-ui-react'

export default class NewVoter extends Component {
	state = {
		first_name: '',
		last_name: '',
		age: '',
		political_party_identification: '',
		street_number: '',
		street_name: '',
		city: '',
		zip_code: '',
		state: '',
		gender: '',
	}

	makeRangeArray = () => {
		let newArr = []
		for (let i = 1; i <= 100; i++) {
			newArr.push(i)
		}
		return newArr
	}

	genderOptions = () => {
		return [
			{ key: 'm', text: 'Male', value: 'male' },
			{ key: 'f', text: 'Female', value: 'female' },
			{ key: 'o', text: 'Other', value: 'other' },
		]
	}

	partyOptions = () => {
		return [
			{ key: 'republican', text: 'Republican', value: 'republican' },
			{ key: 'democrat', text: 'Democrat', value: 'democrat' },
			{ key: 'independent', text: 'Independent', value: 'independent' },
		]
	}

	render() {
		const {
			gender,
			age,
			first_name,
			last_name,
			political_party_identification,
			street_number,
			street_name,
			city,
			state,
			zip_code,
		} = this.state
		return (
			<Container style={{ padding: '40px' }}>
				<Header as='h1'>ADD A VOTER</Header>
				<Form>
					<Header as='h3'>Name</Header>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='First name'
							placeholder='First name'
							name='first_name'
							value={first_name}
						/>
						<Form.Input
							fluid
							label='Last name'
							placeholder='Last name'
							name='last_name'
							value={last_name}
						/>
					</Form.Group>

					<Form.Group widths='equal'>
						<Form.Select
							fluid
							name='political_party_identification'
							label='Political Party Identification'
							options={this.partyOptions()}
							placeholder='Political Party'
							value={political_party_identification}
						/>
						<Form.Select
							fluid
							label='Gender'
							options={this.genderOptions()}
							placeholder='Gender'
							value={gender}
						/>
						<Form.Select
							fluid
							name='age'
							label='Age'
							options={this.makeRangeArray().map(num => ({ key: num, text: num, value: num }))}
							placeholder='Age'
							value={age}
						/>
					</Form.Group>
					<Header as='h3'>Address</Header>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='Street Number'
							placeholder='Street Number'
							name='street_number'
							value={street_number}
						/>
						<Form.Input
							fluid
							label='Street Name'
							placeholder='Street Name'
							name='street_name'
							value={street_name}
						/>
						<Form.Input fluid label='City' placeholder='City' name='city' value={city} />
						<Form.Input fluid label='State' placeholder='State' name='state' value={state} />
						<Form.Input
							fluid
							label='Zip Code'
							placeholder='Zip Code'
							name='zip_code'
							value={zip_code}
						/>
					</Form.Group>

					<Form.Button>Submit</Form.Button>
				</Form>
			</Container>
		)
	}
}
