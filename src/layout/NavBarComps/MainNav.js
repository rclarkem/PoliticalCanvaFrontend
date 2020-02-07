import React from 'react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

export default function MainNav({ loggedInUserId, token }) {
	return (
		<div>
			{loggedInUserId ? (
				<LogoutNav loggedInUserId={loggedInUserId} />
			) : (
				<LoginNav loggedInUserId={loggedInUserId} />
			)}
		</div>
	)
}
