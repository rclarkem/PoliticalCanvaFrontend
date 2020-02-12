import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Form, Header } from 'semantic-ui-react'

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

	handleInputOnchange = e => {
		// console.log(e.target.value)
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	dropDownSelected = (event, data) => {
		// console.log([data.name], data.value)
		this.setState({
			[data.name]: data.value,
		})
	}

	makeRangeArray = () => {
		let newArr = []
		for (let i = 18; i <= 100; i++) {
			newArr.push(i)
		}
		return newArr
	}

	genderOptions = () => {
		return [
			{ key: 'Male', text: 'Male', value: 'Male' },
			{ key: 'Female', text: 'Female', value: 'Female' },
			{ key: 'Other', text: 'Other', value: 'Other' },
		]
	}

	stateOptions = () => {
		return [
			'Alabama',
			'Alaska',
			'American Samoa',
			'Arizona',
			'Arkansas',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'District of Columbia',
			'Florida',
			'Georgia',
			'Guam',
			'Hawaii',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Kansas',
			'Kentucky',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Palau',
			'Pennsylvania',
			'Puerto Rico',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'Utah',
			'Vermont',
			'Virgin Island',
			'Virginia',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		]
	}

	partyOptions = () => {
		return [
			{ key: 'Republican', text: 'Republican', value: 'Republican' },
			{ key: 'Democrat', text: 'Democrat', value: 'Democrat' },
			{ key: 'Independent', text: 'Independent', value: 'Independent' },
		]
	}

	formSubmission = e => {
		e.preventDefault()
		this.props.addVoterToMyVotersList(this.state)
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
		// console.log(this.prop.)
		return (
			<Container style={{ padding: '40px' }}>
				<Header as='h1'>{this.props.text} A VOTER</Header>
				<Form onSubmit={this.formSubmission}>
					<Header as='h3'>Name</Header>
					<Form.Group widths='equal'>
						<Form.Input
							onChange={this.handleInputOnchange}
							fluid
							type='text'
							required
							label='First name'
							placeholder='First name'
							name='first_name'
							value={first_name}
						/>
						<Form.Input
							onChange={this.handleInputOnchange}
							fluid
							required
							label='Last name'
							placeholder='Last name'
							name='last_name'
							value={last_name}
						/>
					</Form.Group>

					<Form.Group widths='equal'>
						<Form.Select
							onChange={this.dropDownSelected}
							fluid
							required
							name='political_party_identification'
							label='Political Party Identification'
							options={this.partyOptions()}
							placeholder='Political Party'
							value={political_party_identification}
						/>
						<Form.Select
							fluid
							onChange={this.dropDownSelected}
							required
							name='gender'
							label='Gender'
							options={this.genderOptions()}
							placeholder='Gender'
							value={gender}
						/>
						<Form.Select
							fluid
							onChange={this.dropDownSelected}
							required
							name='age'
							label='Age'
							options={this.makeRangeArray().map(num => ({
								key: num,
								text: num,
								value: num,
							}))}
							placeholder='Age'
							value={age}
						/>
					</Form.Group>
					<Header as='h3'>Address</Header>
					<Form.Group widths='equal'>
						<Form.Input
							onChange={this.handleInputOnchange}
							fluid
							required
							type='number'
							label='Street Number'
							placeholder='Street Number'
							name='street_number'
							value={street_number}
						/>
						<Form.Input
							onChange={this.handleInputOnchange}
							fluid
							required
							label='Street Name'
							placeholder='Street Name'
							name='street_name'
							value={street_name}
						/>
						<Form.Input
							fluid
							required
							label='City'
							placeholder='City'
							name='city'
							value={city}
							onChange={this.handleInputOnchange}
						/>
						<Form.Select
							fluid
							onChange={this.dropDownSelected}
							required
							name='state'
							label='State'
							options={this.stateOptions().map(state => ({
								key: state,
								text: state,
								value: state,
							}))}
							placeholder='State'
							value={state}
						/>
						<Form.Input
							onChange={this.handleInputOnchange}
							required
							type='number'
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
