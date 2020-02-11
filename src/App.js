import React, { Component } from 'react'
import LogOut from './layout/SignUpComps/LogOut'
import Signup from './layout/SignUpComps/Signup'
import Login from './layout/SignUpComps/Login'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './DashboardComponents/Dashboard'
import Voters from './containers/Voters'
import Canvas from './containers/Canvas'
import PublicHomePage from './components/PublicHomePage'
import Profile from './components/Profile'
import MainNav from './layout/NavBarComps/MainNav'
import NewVoter from './components/NewVoter'
import axios from 'axios'
import IndividualVoter from './components/IndividualVoter'

class App extends Component {
	state = {
		loggedInUserId: null,
		userInfo: null,
		admin: null,
		token: null,
		myVoters: [],
		voter: null,
		searchTerm: '',
		isFiltered: 'all',
	}

	componentDidMount() {
		this.setState({
			token: localStorage.token,
			loggedInUserId: localStorage.loggedInUserId,
			admin: localStorage.admin,
			userInfo: JSON.parse(localStorage.getItem('userInfo')),
		})
	}

	updateUserCandidate = async () => {
		localStorage.removeItem('userInfo')
		await axios
			.get(`http://localhost:3000/users/${this.state.loggedInUserId}`, {
				headers: {
					Authorization: this.state.token,
				},
			})
			.then(data => {
				console.log(data.data)
				localStorage.setItem('userInfo', JSON.stringify(data.data))
				// this.setState({ userInfo: data.data })
			})
	}

	setLoggedInUser = (userInfo, token) => {
		console.log(userInfo, token)
		localStorage.token = token
		localStorage.loggedInUserId = userInfo.id
		localStorage.admin = userInfo.admin
		localStorage.setItem('userInfo', JSON.stringify(userInfo))

		this.setState({
			loggedInUserId: userInfo.id,
			token: token,
			admin: userInfo.admin,
			userInfo: userInfo,
		})
	}

	logout = () => {
		localStorage.removeItem('loggedInUserId')
		localStorage.removeItem('token')
		localStorage.removeItem('admin')
		localStorage.removeItem('userInfo')
		this.setState({
			loggedInUserId: null,
			token: null,
			admin: null,
			userInfo: null,
		})
	}

	addVoterToMyVotersList = async voterObj => {
		await fetch('http://localhost:3000/voters', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: this.state.token,
			},
			body: JSON.stringify({
				first_name: voterObj.first_name,
				last_name: voterObj.last_name,
				age: voterObj.age,
				gender: voterObj.gender,
				political_party_identification: voterObj.political_party_identification,
				street_number: voterObj.street_number,
				street_name: voterObj.street_name,
				city: voterObj.city,
				state: voterObj.state,
				zip_code: voterObj.zip_code,
			}),
		}).then(response => response.json())
		await axios
			.get('http://localhost:3000/my-voters', {
				headers: {
					Authorization: this.state.token,
				},
			})
			.then(myVoters => {
				this.setState({ myVoters: myVoters.data }, () =>
					this.props.history.push('/dashboard/my-voters'),
				)
			})
	}

	editVoters = async voterObj => {
		if (this.state.voter.eligible_voter_id) {
			const { eligible_voter_id } = this.state.voter
			await fetch(`http://localhost:3000/voters/${eligible_voter_id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: this.state.token,
				},
				body: JSON.stringify({
					first_name: voterObj.first_name,
					last_name: voterObj.last_name,
					age: voterObj.age,
					gender: voterObj.gender,
					political_party_identification: voterObj.political_party_identification,
					street_number: voterObj.street_number,
					street_name: voterObj.street_name,
					city: voterObj.city,
					state: voterObj.state,
					zip_code: voterObj.zip_code,
				}),
			})
				.then(response => response.json())
				.then(newVoter => {
					const newArr = this.state.myVoters.map(voter => {
						if (voter.eligible_voter_id === this.state.voter.eligible_voter_id) {
							return newVoter
						} else {
							return voter
						}
					})
					this.setState({ myVoters: newArr })
				})
			await axios
				.get('http://localhost:3000/my-voters', {
					headers: {
						Authorization: this.state.token,
					},
				})
				.then(myVoters => {
					this.setState({ myVoters: myVoters.data }, () =>
						this.props.history.push('/dashboard/my-voters'),
					)
				})
		}
	}

	getinitialVoters = votersArr => {
		if (this.state.loggedInUserId && this.state.token) {
			this.setState({
				myVoters: votersArr,
			})
		}
	}

	fullName = (firstN, lastN) => {
		return firstN + ' ' + lastN
	}

	renderVoters = () => {
		return this.state.myVoters.filter(voter => {
			return this.fullName(voter.eligible_voter.first_name, voter.eligible_voter.last_name)
				.toLowerCase()
				.includes(this.state.searchTerm.toLowerCase())
		})
	}

	grabVoterDetail = voter => {
		this.setState({ voter: voter })
	}

	searchVoter = event => {
		this.setState({
			searchTerm: event.target.value,
		})
	}

	filteredDropDown = str => {
		this.setState({
			isFiltered: str.toLowerCase(),
		})
	}

	renderFiltered = str => {
		if (this.state.isFiltered === 'all') {
			return this.renderVoters()
		} else if (this.state.isFiltered === 'age') {
			return this.renderVoters().sort((a, b) => a.eligible_voter.age - b.eligible_voter.age)
		} else {
			return this.renderVoters().sort((a, b) =>
				a.eligible_voter.gender.localeCompare(b.eligible_voter.gender),
			)
		}
	}

	render() {
		const { loggedInUserId, token, myVoters, isFiltered, admin, userInfo, voter } = this.state
		console.log(
			localStorage.userInfo,
			loggedInUserId,
			localStorage.token,
			this.state.searchTerm,
		)
		return (
			<div className='App'>
				<MainNav loggedInUserId={loggedInUserId} logout={this.logout} />

				{loggedInUserId && token ? null : <Redirect to='/' />}
				<Switch>
					<Route
						path='/signup'
						render={props => <Signup {...props} setLoggedInUser={this.setLoggedInUser} />}
					/>
					<Route
						path='/login'
						render={props => <Login {...props} setLoggedInUser={this.setLoggedInUser} />}
					/>
					<Route path='/logout' render={props => <LogOut {...props} />} />
					<Route
						path='/dashboard/new-voter'
						render={props => (
							<NewVoter
								text='ADD'
								{...props}
								addVoterToMyVotersList={this.addVoterToMyVotersList}
							/>
						)}
					/>
					<Route
						path='/dashboard/edit-voter/:id'
						render={props => (
							<IndividualVoter
								text='EDIT'
								{...props}
								voter={voter}
								editVoters={this.editVoters}
							/>
						)}
					/>
					<Route
						path='/dashboard/my-voters'
						render={props => (
							<Voters
								{...props}
								loggedInUserId={loggedInUserId}
								searchVoter={this.searchVoter}
								filteredDropDown={this.filteredDropDown}
								token={token}
								voters={this.renderFiltered(isFiltered)}
								grabVoterDetail={this.grabVoterDetail}
								getinitialVoters={this.getinitialVoters}
							/>
						)}
					/>
					<Route path='/dashboard/canvassing' render={props => <Canvas {...props} />} />
					<Route
						path='/dashboard/my-profile'
						render={props => (
							<Profile
								{...props}
								userInfo={JSON.parse(localStorage.userInfo)}
								token={localStorage.token}
								updateUserCandidate={this.updateUserCandidate}
							/>
						)}
					/>
					<Route exact path='/'>
						{loggedInUserId && token ? (
							<Dashboard
								loggedInUserId={loggedInUserId}
								token={token}
								admin={admin}
								userInfo={userInfo}
							/>
						) : (
							<PublicHomePage loggedInUserId={loggedInUserId} token={token} />
						)}
					</Route>
				</Switch>
				{voter ? <Redirect to={`/dashboard/edit-voter/${voter.id}`} /> : <Redirect to='/' />}
			</div>
		)
	}
}
export default withRouter(App)
