import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import {Radio, Form} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const date_of_inter = () => {
  return new Date().toString().split(' ').slice(0, 4).join(' ')
}

export default class HomeScript extends Component {
  state = {
    checked: false,
    contact_made: false,
    contact_not_made_reason: '',
    vote_in_current_election: '',
    date_of_interaction: date_of_inter(),
    candidate_support: ''
  }

  handleOnChange = () => {
    this.setState({
      checked: !this.state.checked,
      contact_made: !this.state.contact_made,
      contact_not_made_reason: '',
      vote_in_current_election: '',
      candidate_support: ''
    })
  }

  radioChange = e => {
    this.setState({contact_not_made_reason: e.target.value})
  }

  options = () => {
    return [
      {
        key: 'Yes',
        text: 'Yes',
        value: true
      }, {
        key: 'No',
        text: 'No',
        value: false
      }
    ]
  }

  dropDownSelected = (event, data) => {
    console.log([data.name], data.value)
    this.setState({
      [data.name]: data.value
    })
  }

  formSubmission = e => {
    e.preventDefault()
    if (!this.state.checked) {
      return this.props.votersNotHome(this.state)
    } else {
      return this.props.votersHome(this.state)
    }
  }

  render() {
    const {checked, contact_not_made_reason, candidate_support, vote_in_current_election} = this.state
		console.log(contact_not_made_reason)
		return (
			<div>
				<Container style={{ padding: '20px' }}>
					<Radio toggle={true} onChange={this.handleOnChange} />
					<p style={{ textAlign: 'left' }}>Available?</p>
					<form style={{ textAlign: 'center' }} onSubmit={this.formSubmission}>
						{!checked ? (
							<div>
								<h1>
									{`Why were you not able to contact ${this.props.voter.eligible_voter.first_name} ${this.props.voter.eligible_voter.last_name} `}
									?
								</h1>{' '}
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='Not Home'
											checked={contact_not_made_reason === 'Not Home'}
											onChange={this.radioChange}
										/>
										Not Home
									</label>
								</div>
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='Refused'
											checked={contact_not_made_reason === 'Refused'}
											onChange={this.radioChange}
										/>
										Refused
									</label>
								</div>
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='Moved'
											checked={contact_not_made_reason === 'Moved'}
											onChange={this.radioChange}
										/>
										Moved
									</label>
								</div>
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='Deceased'
											checked={contact_not_made_reason === 'Deceased'}
											onChange={this.radioChange}
										/>
										Deceased
									</label>
								</div>
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='Inaccessible'
											checked={contact_not_made_reason === 'Inaccessible'}
											onChange={this.radioChange}
										/>
										Inaccessible
									</label>
								</div>
								<div className='radio'>
									<label>
										<input
											type='radio'
											value='No Such Address'
											checked={contact_not_made_reason === 'No Such Address'}
											onChange={this.radioChange}
										/>
										No Such Address
									</label>
								</div>
							</div>
						) : (
							<Container>
								<h1>Voter Questions:</h1>{' '}
								<Form.Select
									fluid
									onChange={this.dropDownSelected}
									required
									name='vote_in_current_election'
									label={`Will ${this.props.voter.eligible_voter.first_name} ${this.props.voter.eligible_voter.last_name} be Voting In This Current Election?`}
									options={this.options()}
									placeholder='Yes or No'
									value={vote_in_current_election}
								/>
								<Form.Select
									fluid
									onChange={this.dropDownSelected}
									required
									name='candidate_support'
									label={`Will ${this.props.voter.eligible_voter.first_name} ${this.props.voter.eligible_voter.last_name} Support Our Candidate?`}
									options={this.options()}
									placeholder='Yes or No'
									value={candidate_support}
								/>
							</Container>
						)}
						<Button type='submit'>Submit</Button>
					</form>
					<Link to='/dashboard/canvassing'>
						<Button onClick={this.props.setVoterNull}>Go Back</Button>
					</Link>
				</Container>
			</div>
		)
	}
}
