import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

export default function CanvasserTable(props) {
	console.log(props)

	const valueW = word => {
		if (word === false) {
			return 'No'
		} else {
			return 'Yes'
		}
	}

	const slicedDate = () => {}

	return (
		<div>
			<Table striped bordered hover variant='dark' size='sm'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Contact Made?</th>
						<th>Reason Not Made</th>
						<th>Vote in Current Election</th>
					</tr>
				</thead>
				<tbody>
					{props.voterInteractions.map(
						interaction =>
							interaction.candidate_id === props.userInfo.candidate_id && (
								<tr key={interaction.id}>
									<td>{interaction.date_of_interaction}</td>
									<th>{valueW(interaction.contact_made)}</th>
									<td>{interaction.contact_not_made_reason}</td>
									{interaction.vote_in_current_election !== null ? (
										<td>{valueW(interaction.vote_in_current_election)}</td>
									) : (
										<td>N/A</td>
									)}
								</tr>
							),
					)}
				</tbody>
			</Table>
		</div>
	)
}
