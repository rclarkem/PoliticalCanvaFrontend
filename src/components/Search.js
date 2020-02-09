import { InputGroup, FormControl } from 'react-bootstrap'
import React from 'react'

export default function Search(props) {
	return (
		<div>
			<InputGroup className='mb-3' onChange={props.searchVoter}>
				<InputGroup.Prepend></InputGroup.Prepend>
				<FormControl
					placeholder='Search Voter...'
					aria-label='Voter Name'
					aria-describedby='basic-addon1'
				/>
			</InputGroup>

			<strong>Filter:</strong>
			<select onChange={event => props.filteredDropDown(event.target.value)}>
				<option value='All'>All</option>
				<option value='Gender'>Gender</option>
				<option value='Age'>Age</option>
			</select>
		</div>
	)
}
