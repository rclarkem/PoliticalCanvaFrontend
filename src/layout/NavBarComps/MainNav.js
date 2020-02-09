import React from 'react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

export default function MainNav({ loggedInUserId, token, logout }) {
	return (
		<div>
			{loggedInUserId ? (
				<LogoutNav loggedInUserId={loggedInUserId} logout={logout} />
			) : (
				<LoginNav loggedInUserId={loggedInUserId} />
			)}
		</div>
	)
}
