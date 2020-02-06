import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Voters extends Component {
	render() {
		console.log(this.props)
		return <div>Voters</div>
	}
}

export default withRouter(Voters)
