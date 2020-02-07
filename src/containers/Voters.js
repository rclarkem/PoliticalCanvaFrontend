import React, { Component } from 'react'
import axios from 'axios'
import VoterDetail from '../components/VoterDetail'
import { InputGroup, FormControl } from 'react-bootstrap'

export default class Voters extends Component {
	componentDidMount = async () => {
		await axios
			.get('http://localhost:3000/my-voters', {
				headers: {
					Authorization: this.props.token,
				},
			})
			.then(myVoters => {
				console.log(myVoters.data)
				this.props.getinitialVoters(myVoters.data)
			})
	}

	render() {
		const { voters } = this.props
		// console.log(this.props)
		return (
			<div>
				<InputGroup className='mb-3' onChange={this.props.searchVoter}>
					<InputGroup.Prepend></InputGroup.Prepend>
					<FormControl
						placeholder='Search Voter...'
						aria-label='Voter Name'
						aria-describedby='basic-addon1'
					/>
				</InputGroup>
				{/* <input type='text' placeholder='search' onChange={this.props.searchVoter}></input> */}
				{voters.map(voter => (
					<VoterDetail
						voter={voter}
						key={voter.id}
						grabVoterDetail={this.props.grabVoterDetail}
					/>
				))}
			</div>
		)
	}
}
