import React from 'react'
import {Table} from 'react-bootstrap'

export default function CanvasserTable(props) {
  console.log(props)

  const valueW = word => {
    if (word === false) {
      return 'No'
    } else {
      return 'Yes'
    }
  }

  return (<div>
    <Table striped="striped" bordered="bordered" hover="hover" variant='dark' size='sm'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Contact Made?</th>
          <th>Reason Not Made</th>
          <th>Vote in Current Election</th>
          <th>Vote for our Candidate</th>
        </tr>
      </thead>
      <tbody>
        {
          props.voterInteractions.map(interaction => interaction.candidate_id === props.userInfo.candidate_id && (<tr key={interaction.id}>
            <td>{interaction.date_of_interaction}</td>
            <th>{valueW(interaction.contact_made)}</th>
            {
              interaction.contact_not_made_reason !== null
                ? (<td>{interaction.contact_not_made_reason}</td>)
                : (<td>N/A</td>)
            }
            {
              interaction.vote_in_current_election !== null
                ? (<td>{valueW(interaction.vote_in_current_election)}</td>)
                : (<td>N/A</td>)
            }
            {
              interaction.candidate_support !== null
                ? (<td>{valueW(interaction.candidate_support)}</td>)
                : (<td>N/A</td>)
            }
          </tr>),)
        }
      </tbody>
    </Table>
  </div>)
}
