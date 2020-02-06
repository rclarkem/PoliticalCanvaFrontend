import React, { Component, Fragment } from 'react'
import LogOut from './layout/SignUpComps/LogOut'
import Signup from './layout/SignUpComps/Signup'
import Login from './layout/SignUpComps/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './layout/NavBarComps/LogoutNav'
import Dashboard from './DashboardComponents/Dashboard'
import Voters from './containers/Voters'
import Canvas from './containers/Canvas'
import PublicHomePage from './components/PublicHomePage'
import Profile from './components/Profile'
import MainNav from './layout/NavBarComps/MainNav'
import axios from 'axios'

export default class App extends Component {
	state = {
		loggedInUserId: null,
		token: false,
		myVoters: [],
		voter: {},
	}

	// componentDidMount = async () => {
	// 	let myVoters = await axios.get()
	// }

	render() {
		const { loggedInUserId, token } = this.state
		console.log(loggedInUserId, token)
		return (
			<div className='App'>
				<MainNav loggedInUserId={loggedInUserId} token={token} />
				<Switch>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/logout'>
						<LogOut />
					</Route>
					<Route path='/dashboard/my-voters'>
						{loggedInUserId && token !== null ? (
							<Voters loggedInUserId={loggedInUserId} token={token} />
						) : (
							<Redirect to='/not-found' />
						)}
					</Route>
					<Route path='/dashboard/canvassing'>
						{loggedInUserId && token !== null ? (
							<Canvas loggedInUserId={loggedInUserId} token={token} />
						) : (
							<Redirect to='/not-found' />
						)}
					</Route>
					<Route path='/dashboard/my-profile'>
						{loggedInUserId && token !== null ? (
							<Profile loggedInUserId={loggedInUserId} token={token} />
						) : (
							<Redirect to='/not-found' />
						)}
					</Route>
					<Route exact path='/'>
						{loggedInUserId && token !== null ? (
							<Dashboard loggedInUserId={loggedInUserId} token={token} />
						) : (
							<PublicHomePage loggedInUserId={loggedInUserId} token={token} />
						)}
					</Route>
					}
				</Switch>
			</div>
		)
	}
}
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
