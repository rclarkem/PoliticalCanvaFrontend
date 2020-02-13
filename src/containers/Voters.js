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
		if (
			this.props.loggedInUserId &&
			this.props.token &&
			this.props.userInfo.candidate_id !== null
		) {
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
		console.log(voters)
		return (
			<div>
				<Search
					searchVoter={this.props.searchVoter}
					filteredDropDown={this.props.filteredDropDown}
				/>
				{this.props.userInfo.candidate_id === null && (
					<div className='ui warning message'>
						<i className='close icon' onClick={this.onClick}></i>
						<div className='header'>You must enter candidate code before you can do that!</div>
						Visit your profile page and enter code given by campaign manager, then try again
					</div>
				)}
				{this.state.loading ? (
					<Spinner />
				) : (
					voters.map(voter => (
						<VoterDetail
							canvas={this.props.canvas}
							voter={voter}
							key={voter.id}
							grabVoterDetail={this.props.grabVoterDetail}
							userInfo={this.props.userInfo}
						/>
					))
				)}
			</div>
		)
	}
}
