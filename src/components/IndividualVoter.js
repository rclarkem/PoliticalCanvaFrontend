import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import {Form, Header} from 'semantic-ui-react'

export default class IndividualVoter extends Component {
  state = {
    first_name: this.props.voter.eligible_voter.first_name,
    last_name: this.props.voter.eligible_voter.last_name,
    age: this.props.voter.eligible_voter.age,
    political_party_identification: this.props.voter.eligible_voter.political_party_identification,
    gender: this.props.voter.eligible_voter.gender
  }

  handleInputOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  dropDownSelected = (event, data) => {
    this.setState({
      [data.name]: data.value
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
      {
        key: 'Male',
        text: 'Male',
        value: 'Male'
      }, {
        key: 'Female',
        text: 'Female',
        value: 'Female'
      }, {
        key: 'Other',
        text: 'Other',
        value: 'Other'
      }
    ]
  }

  partyOptions = () => {
    return [
      {
        key: 'Republican',
        text: 'Republican',
        value: 'Republican'
      }, {
        key: 'Democrat',
        text: 'Democrat',
        value: 'Democrat'
      }, {
        key: 'Independent',
        text: 'Independent',
        value: 'Independent'
      }
    ]
  }

  formSubmission = e => {
    e.preventDefault()
    this.props.editVoters(this.state)
  }

	render() {
		const { gender, age, first_name, last_name, political_party_identification } = this.state
		console.log(political_party_identification)
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
							placeholder='Test'
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
					<Form.Button>Submit</Form.Button>
				</Form>
			</Container>
		)
	}
}
