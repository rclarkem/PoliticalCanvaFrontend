import React, { Component } from 'react'
import LogOut from './layout/SignUpComps/LogOut'
import Signup from './layout/SignUpComps/Signup'
import Login from './layout/SignUpComps/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './DashboardComponents/Dashboard'
import Voters from './containers/Voters'
import Canvas from './containers/Canvas'
import PublicHomePage from './components/PublicHomePage'
import Profile from './components/Profile'
import MainNav from './layout/NavBarComps/MainNav'
import IndividualVoter from './components/IndividualVoter'

export default class App extends Component {
	state = {
		loggedInUserId: null,
		token: false,
		myVoters: [],
		voter: null,
		searchTerm: '',
	}

	setLoggedInUser = (userInfo, token) => {
		this.setState({
			loggedInUserId: userInfo,
			token: token,
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

	render() {
		const { loggedInUserId, token, myVoters, voter, searchTerm } = this.state
		console.log(searchTerm, myVoters[0])
		return (
			<div className='App'>
				<MainNav loggedInUserId={loggedInUserId} />
				{loggedInUserId ? null : <Redirect to='/' />}
				<Switch>
					<Route path='/signup' render={props => <Signup {...props} />} />
					<Route
						path='/login'
						render={props => <Login {...props} setLoggedInUser={this.setLoggedInUser} />}
					/>
					<Route path='/logout' render={props => <LogOut {...props} />} />
					{/* <Route
						path='/dashboard/my-voters/:id'
						render={props => <IndividualVoter {...props} voter={voter} />}
					/> */}
					<Route
						path='/dashboard/my-voters'
						render={props => (
							<Voters
								{...props}
								searchVoter={this.searchVoter}
								token={token}
								voters={this.renderVoters()}
								grabVoterDetail={this.grabVoterDetail}
								getinitialVoters={this.getinitialVoters}
							/>
						)}
					/>
					<Route path='/dashboard/canvassing' render={props => <Canvas {...props} />} />
					<Route path='/dashboard/my-profile' render={props => <Profile {...props} />} />
					<Route exact path='/'>
						{loggedInUserId ? (
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
// const token =
// 	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.yP2GCqMAXb26qIcLflK-O132iN4q-m8TVJqvphTPG-8'
// const user = {
// 	id: 1,
// 	first_name: 'John',
// 	last_name: 'Smith',
// 	username: 'JSmith',
// 	email: 'JS@edu.com',
// 	admin: true,
// 	candidate_id: 1,
// 	candidate_info: {
// 		first_name: 'Alexandria',
// 		last_name: 'Ocasio-Cortez',
// 		age: 32,
// 		political_party_identification: 'Independent',
// 		street_number: '780',
// 		street_name: 'Third Avenue Suite 2601',
// 		city: 'New York',
// 		state: 'New York',
// 		zip_code: '10017',
// 	},
// }
