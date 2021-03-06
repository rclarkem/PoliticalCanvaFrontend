/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  // console.log(props)
  const { admin, candidate_id } = props.userInfo;
  return (
    <div>
      <h1 style={{ textAlign: 'center', borderStyle: ' ridge' }}>Main Dashboard </h1>
      <div style={{ textAlign: 'center' }}>Welcome, {props.userInfo.first_name}</div>
      <div className='container' style={{ textAlign: 'center', padding: '20px' }}>
        <div className='ui four column grid'>
          <div className='row' style={{ display: 'table' }}>
            <div className='column'>
              <div className='card' style={{ width: '18rem' }}>
                <div className='card-body'>
                  <h5 className='card-title'>Voter List</h5>
                  <i className='fas fa-user' style={{ fontSize: '30px' }}></i>
                  <p className='card-text'>List of current eligible voters in your district</p>

                  <Link to='/dashboard/my-voters' className='card-link'>
                    My Voters
                  </Link>
                  {candidate_id !== null && (
                    <Link to='/dashboard/new-voter' className='card-link'>
                      Add New Voter
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card' style={{ width: '18rem', alignSelf: 'center' }}>
                <div className='card-body'>
                  <h5 className='card-title'>Canvassing Tools</h5>
                  <i className='fas fa-phone' style={{ fontSize: '30px' }}></i>
                  <p className='card-text'>Contact you voters through phone, in-person and email campaigns</p>

                  {/* <Link to='/' className='card-link'>
									Phone
								</Link> */}
                  <Link to='/dashboard/canvassing' className='card-link'>
                    In-Person
                  </Link>
                  {/* <Link to='/' className='card-link'>
									Email
								</Link> */}
                </div>
              </div>
            </div>
            {/* {admin && candidate_id == null && (
							<div className='col-sm' style={{ padding: '30px', alignSelf: 'right' }}>
								<div className='card' style={{ width: '18rem', alignSelf: 'left' }}>
									<div className='card-body'>
										<h5 className='card-title'>Add Candidate</h5>
										<i className='fas fa-chart-area' style={{ fontSize: '30px' }}></i>
										<p className='card-text'>Create Your Candidate's Campaign</p>
										<Link to='/' className='card-link'>
											Add Candidate
										</Link>
									</div>
								</div>
							</div>
						)} */}
          </div>
        </div>
      </div>
    </div>
  );
}
