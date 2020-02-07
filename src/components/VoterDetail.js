import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function VoterDetail(props) {
	// console.log(props)
	const { voter } = props

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<Container>
			<div className='card'>
				<h5 className='card-header'>{`${voter.voter_info.first_name} ${voter.voter_info.last_name}`}</h5>
				<div className='card-body'>
					<h5 className='card-title'>
						Party ID:
						{voter.voter_info.political_party_identification}
					</h5>
					<h5 className='card-title'>
						Address:
						{`${voter.voter_info.street_number} ${voter.voter_info.street_name}
						${voter.voter_info.city} ${voter.voter_info.state} ${voter.voter_info.zip_code}`}
					</h5>
					<Button variant='primary' onClick={handleShow}>
						View Voter Details
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{`${voter.voter_info.first_name} ${voter.voter_info.last_name}`}</Modal.Title>
						</Modal.Header>
						<Modal.Body>Gender: {voter.voter_info.gender}</Modal.Body>
						<Modal.Body>Age: {voter.voter_info.age}</Modal.Body>
						<Modal.Body>Phone Number: INSERT EMAIL FROM MIGRATION TABLE</Modal.Body>
						<Modal.Body>Email: INSERT EMAIL FROM MIGRATION TABLE</Modal.Body>
						<Modal.Body>Street Number: {voter.voter_info.street_number}</Modal.Body>
						<Modal.Body>Street Name: {voter.voter_info.street_name}</Modal.Body>
						<Modal.Body>City: {voter.voter_info.city}</Modal.Body>
						<Modal.Body>State: {voter.voter_info.state}</Modal.Body>
						<Modal.Body>Zip Code: {voter.voter_info.zip_code}</Modal.Body>
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
