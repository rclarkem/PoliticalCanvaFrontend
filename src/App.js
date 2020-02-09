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

const token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.yP2GCqMAXb26qIcLflK-O132iN4q-m8TVJqvphTPG-8'
const user = {
	id: 1,
	first_name: 'John',
	last_name: 'Smith',
	username: 'JSmith',
	email: 'JS@edu.com',
	admin: true,
	candidate_id: 1,
	candidate_info: {
		first_name: 'Alexandria',
		last_name: 'Ocasio-Cortez',
		age: 32,
		political_party_identification: 'Independent',
		street_number: '780',
		street_name: 'Third Avenue Suite 2601',
		city: 'New York',
		state: 'New York',
		zip_code: '10017',
	},
}

class App extends Component {
	state = {
		loggedInUserId: user,
		token: token,
		myVoters: [],
		voter: null,
		searchTerm: '',
		isFiltered: 'all',
	}

	componentDidMount() {
		this.setState({
			token: localStorage.token,
			loggedInUserId: localStorage.loggedInUserId,
		})
	}

	setLoggedInUser = (userInfo, token) => {
		localStorage.token = token
		localStorage.loggedInUserId = userInfo
		this.setState({
			loggedInUserId: userInfo,
			token: token,
		})
	}

	logout = () => {
		localStorage.removeItem('loggedInUserId')
		localStorage.removeItem('token')
		this.setState({
			loggedInUserId: null,
			token: null,
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
		})
			.then(response => response.json())
			.then(voter => {
				this.setState({
					myVoters: [...this.state.myVoters, voter],
				})
			})
		await axios
			.get('http://localhost:3000/my-voters', {
				headers: {
					Authorization: this.state.token,
				},
			})
			.then(myVoters => {
				this.setState(
					{
						myVoters: myVoters.data,
					},
					() => this.props.history.push('/dashboard/my-voters'),
				)
			})
	}

	getinitialVoters = votersArr => {
		this.setState({
			myVoters: votersArr,
		})
	}

	renderVoters = () => {
		return this.state.myVoters.filter(voter =>
			voter.voter_info.first_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
		)
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
		console.log(this.state.isFiltered)
		if (this.state.isFiltered === 'all') {
			return this.renderVoters()
		} else if (this.state.isFiltered === 'age') {
			return this.renderVoters().sort((a, b) => a.voter_info.age - b.voter_info.age)
		} else {
			return this.renderVoters().sort((a, b) =>
				a.voter_info.gender.localeCompare(b.voter_info.gender),
			)
		}
	}

	render() {
		const { loggedInUserId, token, searchTerm, myVoters, isFiltered } = this.state
		console.log(myVoters)
		return (
			<div className='App'>
				<MainNav loggedInUserId={loggedInUserId} logout={this.logout} />

				{loggedInUserId && token ? null : <Redirect to='/' />}
				<Switch>
					<Route path='/signup' render={props => <Signup {...props} />} />
					<Route
						path='/login'
						render={props => <Login {...props} setLoggedInUser={this.setLoggedInUser} />}
					/>
					<Route path='/logout' render={props => <LogOut {...props} />} />
					<Route
						path='/dashboard/new-voter'
						render={props => (
							<NewVoter {...props} addVoterToMyVotersList={this.addVoterToMyVotersList} />
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
					<Route path='/dashboard/my-profile' render={props => <Profile {...props} />} />
					<Route exact path='/'>
						{loggedInUserId && token ? (
							<Dashboard loggedInUserId={loggedInUserId} token={token} />
						) : (
							<PublicHomePage loggedInUserId={loggedInUserId} token={token} />
						)}
					</Route>
				</Switch>
				{/* {voter ? <Redirect to={`/dashboard/my-voters/${voter.id}`} /> : <Redirect to='/' />} */}
			</div>
		)
	}
}
export default withRouter(App)
