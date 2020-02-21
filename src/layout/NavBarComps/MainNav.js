import React from 'react'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

export default function MainNav({ loggedInUserId, token, logout, setVoterNull }) {
	return (
		<div>
			{loggedInUserId ? (
				<LogoutNav
					loggedInUserId={loggedInUserId}
					logout={logout}
					setVoterNull={setVoterNull}
				/>
			) : (
				<LoginNav loggedInUserId={loggedInUserId} />
			)}
		</div>
	)
}
