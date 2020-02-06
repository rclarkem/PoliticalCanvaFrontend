import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function PublicHomePage() {
	return (
		<Jumbotron fluid>
			<h1>Welcome to PoliyCan</h1>
			<p>
				This is the simplest canvassing application that will allow you to keep track of your
				potential voters and make sure that your campaign is successful! Your main focus should
				be on policy and aiding your future constituents. Our job will make sure you get out
				the vote without the headache that all those other apps can cause your campaign.
			</p>
		</Jumbotron>
	)
}
