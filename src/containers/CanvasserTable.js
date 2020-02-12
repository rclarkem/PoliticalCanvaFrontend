import React from 'react'
import { Table } from 'react-bootstrap'

export default function CanvasserTable(props) {
	return (
		<Table striped bordered hover variant='dark' size='sm'>
			<thead>
				<tr>
					<th>#</th>
					<th>Contact Made?</th>
					<th>Reason Not Made</th>
					<th>Vote in Current Election</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Date:</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>Date:</td>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<td>Date:</td>
					<td colSpan='2'>Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</Table>
	)
}
