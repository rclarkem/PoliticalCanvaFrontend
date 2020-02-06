import React, { Fragment } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function LoginNav(props) {
	return (
		<div>
			<div className='ui menu'>
				<Link to='/' className='header item'>
					PolCa
				</Link>
				<NavLink to='/login' className='item right navbar-item'>
					Sign In
				</NavLink>
				<NavLink to='/signup' className='item navbar-item'>
					Register
				</NavLink>
			</div>
		</div>
	)
}
