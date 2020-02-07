import React from 'react'

export default function VoterDetail(props) {
	console.log(props)
	const { voter } = props
	return <div>{voter.voter_info.first_name}</div>
}
