import React, { Fragment } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function LogoutNav(props) {
	return (
		<div>
			<div className='ui menu'>
				<Link to='/dashboard' className='header item'>
					PolCa
				</Link>
				<NavLink to='/dashboard/my-profile' className='item right navbar-item'>
					Profile
				</NavLink>
				<NavLink exact to='/dashboard' className='item navbar-item'>
					Dashboard
				</NavLink>
				<NavLink to='/logout' className='item navbar-item'>
					Log Out
				</NavLink>
			</div>
		</div>
	)
}
