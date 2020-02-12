import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function LoginNav(props) {
	console.log(props)
	return (
		<div>
			<div className='ui menu'>
				<Link to='/' className='header item'>
					<i className='fas fa-vote-yea' style={{ fontSize: '20px' }}>
						PoliyCan
					</i>
				</Link>
				<NavLink to='/login' className='item right navbar-item'>
					<i className='fas fa-sign-in-alt'> Sign In</i>
				</NavLink>
				<NavLink to='/signup' className='item navbar-item'>
					<i className='fas fa-user-plus'> Register</i>
				</NavLink>
			</div>
		</div>
	)
}
