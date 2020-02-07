import React, { Component } from 'react'
import axios from 'axios'
import VoterDetail from '../components/VoterDetail'

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
