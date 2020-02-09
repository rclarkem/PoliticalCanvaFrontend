import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
	// console.log(props)
	return (
		<div>
			<h1 style={{ textAlign: 'center', borderStyle: ' ridge' }}>Main Dashboard</h1>
			<div className='container' style={{ textAlign: 'center', padding: '70px' }}>
				<div className='row'>
					<div className='col-sm'>
						<div className='card' style={{ width: '18rem' }}>
							<div className='card-body'>
								<h5 className='card-title'>Voter List</h5>
								<i className='far fa-user' style={{ fontSize: '30px' }}></i>
								<p className='card-text'>List of current eligible voters in your district</p>
								<div>
									<Link to='/dashboard/my-voters' className='card-link'>
										View My Voters Information
									</Link>
								</div>
								<Link to='/dashboard/new-voter' className='card-link'>
									Add New Voter
								</Link>
							</div>
						</div>
					</div>
					<div className='col-sm'>
						<div className='card' style={{ width: '18rem' }}>
							<div className='card-body'>
								<h5 className='card-title'>Canvassing Tools</h5>
								<i className='fas fa-phone' style={{ fontSize: '30px' }}></i>
								<p className='card-text'>
									Contact you voters through phone and email campaigns
								</p>

								<Link to='/' className='card-link'>
									Phone
								</Link>
								<Link to='/' className='card-link'>
									Email
								</Link>
							</div>
						</div>
					</div>
					<div className='col-sm'>
						<div className='card' style={{ width: '18rem' }}>
							<div className='card-body'>
								<h5 className='card-title'>Voter Analytics</h5>
								<i className='fas fa-chart-area' style={{ fontSize: '30px' }}></i>
								<p className='card-text'>Analyze your campaign's canvassing data.</p>
								<Link to='/' className='card-link'>
									View Analytics
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
