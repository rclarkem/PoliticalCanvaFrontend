import React from 'react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

export default function MainNav({ loggedInUserId, token }) {
	return (
		<div>
			{loggedInUserId ? (
				<LogoutNav loggedInUserId={loggedInUserId} token={token} />
			) : (
				<LoginNav loggedInUserId={loggedInUserId} token={token} />
			)}
		</div>
	)
}
