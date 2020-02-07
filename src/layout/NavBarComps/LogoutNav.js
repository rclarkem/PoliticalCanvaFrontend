import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function LogoutNav(props) {
	// console.log(props)
	return (
		<div>
			<div className='ui menu'>
				<Link to='/dashboard' className='item header'>
					<i className='fas fa-vote-yea' style={{ fontSize: '20px' }}>
						{' '}
						PoliyCan
					</i>
				</Link>
				<NavLink to='/dashboard/my-profile' className='item right navbar-item'>
					<i className='fas fa-users'> Profile</i>
				</NavLink>
				<NavLink exact to='/' className='item navbar-item'>
					<i className='fas fa-tachometer-alt'> Dashboard</i>
				</NavLink>
				<NavLink to='/logout' className='item navbar-item'>
					<i className='fas fa-sign-out-alt'> Log Out</i>
				</NavLink>
			</div>
		</div>
	)
}
