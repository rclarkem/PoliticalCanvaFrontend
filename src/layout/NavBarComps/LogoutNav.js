import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function LogoutNav(props) {
	// console.log(props)
	return (
		<div>
			<div className='ui menu'>
				<Link to='/' className='item header'>
					<i className='fas fa-vote-yea' style={{ fontSize: '20px' }} onClick={() => props.setVoterNull()}>
						{' '}
						PoliCanva
					</i>
				</Link>
				<NavLink to='/dashboard/my-profile' className='item right navbar-item'>
					<i className='fas fa-users' onClick={() => props.setVoterNull()}>
						{' '}
						Profile
					</i>
				</NavLink>
				<NavLink exact to='/' className='item navbar-item'>
					<i className='fas fa-tachometer-alt' onClick={() => props.setVoterNull()}>
						{' '}
						Dashboard
					</i>
				</NavLink>
				<Link to='/' className='item navbar-item' onClick={() => props.logout()}>
					<i className='fas fa-sign-out-alt'> Log Out</i>
				</Link>
			</div>
		</div>
	)
}
