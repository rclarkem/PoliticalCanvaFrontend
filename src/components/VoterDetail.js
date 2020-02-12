import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import CanvasserTable from '../containers/CanvasserTable'

function VoterDetail(props) {
	console.log(props)
	const { voter, canvas } = props

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const fullName = (firstN, lastN) => {
		return firstN + ' ' + lastN
	}

	return (
		<Container>
			<div className='card'>
				<h5 className='card-header'>
					{fullName(voter.eligible_voter.first_name, voter.eligible_voter.last_name)}
				</h5>
				<div className='card-body'>
					<h5 className='card-title'>
						Party ID:
						{voter.eligible_voter.political_party_identification}
					</h5>
					<h5 className='card-title'>
						Address:
						{`${voter.eligible_voter.street_number} ${voter.eligible_voter.street_name}
						${voter.eligible_voter.city} ${voter.eligible_voter.state} ${voter.eligible_voter.zip_code}`}
					</h5>
					<div>
						{canvas === false ? (
							<>
								<Link to='/dashboard/edit-voter/:id'>
									<Button
										variant='secondary'
										onClick={() => props.grabVoterDetail(props.voter)}
									>
										Edit
									</Button>
								</Link>
								<Button variant='primary' onClick={handleShow}>
									View Voter Details
								</Button>{' '}
							</>
						) : (
							<Link to={`/dashboard/in-person/${props.voter.id}`}>
								<Button variant='secondary' onClick={() => props.grabVoterDetail(props.voter)}>
									In Person Activity
								</Button>
							</Link>
						)}
					</div>

					<Modal show={show} onHide={handleClose} animation={true} keyboard={true}>
						<Modal.Header closeButton>
							<Modal.Title>{`${voter.eligible_voter.first_name} ${voter.eligible_voter.last_name}`}</Modal.Title>
						</Modal.Header>
						<Modal.Body>Gender: {voter.eligible_voter.gender}</Modal.Body>
						<Modal.Body>Age: {voter.eligible_voter.age}</Modal.Body>
						<Modal.Body>Phone Number: INSERT EMAIL FROM MIGRATION TABLE</Modal.Body>
						<Modal.Body>Email: INSERT EMAIL FROM MIGRATION TABLE</Modal.Body>
						<Modal.Body>Street Number: {voter.eligible_voter.street_number}</Modal.Body>
						<Modal.Body>Street Name: {voter.eligible_voter.street_name}</Modal.Body>
						<Modal.Body>City: {voter.eligible_voter.city}</Modal.Body>
						<Modal.Body>State: {voter.eligible_voter.state}</Modal.Body>
						<Modal.Body>Zip Code: {voter.eligible_voter.zip_code}</Modal.Body>
						{/* TODO Make this section a grid for Activity User Interactions*/}
						<Modal.Title>
							<CanvasserTable />

							{/* <h4>Notes:</h4>
							<p>
								Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
								facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
								vestibulum at eros.
							</p> */}
						</Modal.Title>{' '}
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</Container>
	)
}
export default withRouter(VoterDetail)
// const [show, setShow] = useState(false)

// const handleClose = () => setShow(false)
// const handleShow = () => setShow(true)

// return (
// 	<>
// 		<Modal show={show} onHide={handleClose}>
// 			<Modal.Header closeButton>
// 				<Modal.Title>Modal heading</Modal.Title>
// 			</Modal.Header>
// 			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// 			<Modal.Footer>
// 				<Button variant='secondary' onClick={handleClose}>
// 					Close
// 				</Button>
// 				<Button variant='primary' onClick={handleClose}>
// 					Save Changes
// 				</Button>
// 			</Modal.Footer>
// 		</Modal>
// 	</>
// )
