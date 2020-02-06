import React, { useState } from 'react'
import LogOut from './layout/LogOut'
import Signup from './layout/Signup'
import Login from './layout/Login'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Nav from './layout/LogoutNav'
import Dashboard from './components/Dashboard'
import Voters from './containers/Voters'
import Canvas from './containers/Canvas'
import PublicHomePage from './components/components/PublicHomePage'
import Profile from './components/components/Profile'
import MainNav from './layout/MainNav'

function App() {
	const [loggedIn, setLoggedIn] = useState(true)
	// const loggedIn = false

	console.log(loggedIn)
	return (
		<div className='App'>
			<MainNav />
			<Switch>
				<Route path='/signup' render={props => <Signup {...props} />} />
				<Route path='/login' render={props => <Login {...props} />} />
				<Route path='/logout' render={props => <LogOut {...props} />} />
				<Route path='/dashboard/my-voters' render={props => <Voters {...props} />} />
				<Route path='/dashboard/canvassing' render={props => <Canvas {...props} />} />
				<Route path='/dashboard/my-profile' render={props => <Profile {...props} />} />
				<Route
					path='/'
					render={props => {
						return loggedIn ? <Dashboard {...props} /> : <PublicHomePage {...props} />
					}}
				/>
			</Switch>
		</div>
	)
}

export default App
