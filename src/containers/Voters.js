import React, { Component } from 'react'
import axios from 'axios'
import VoterDetail from '../components/VoterDetail'
// import { InputGroup, FormControl } from 'react-bootstrap'
import Search from '../components/Search'
import { Spinner } from '../components/Spinner'

export default class Voters extends Component {
	state = { loading: true }

	componentDidMount = async () => {
		this.setState({ loading: true })
		if (this.props.loggedInUserId && this.props.token) {
			await axios
				.get('http://localhost:3000/my-voters', {
					headers: {
						Authorization: this.props.token,
					},
				})
				.then(myVoters => {
					this.props.getinitialVoters(myVoters.data)
					this.setState({ loading: false })
				})
		}
	}

	render() {
		const { voters } = this.props
		console.log(this.props)
		return (
			<div>
				<Search
					searchVoter={this.props.searchVoter}
					filteredDropDown={this.props.filteredDropDown}
				/>
				{this.state.loading ? (
					<Spinner />
				) : (
					voters.map(voter => (
						<VoterDetail
							canvas={this.props.canvas}
							voter={voter}
							key={voter.id}
							grabVoterDetail={this.props.grabVoterDetail}
						/>
					))
				)}
			</div>
		)
	}
}
