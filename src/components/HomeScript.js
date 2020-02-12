import React, { Component } from 'react'
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Container } from 'semantic-ui-react'
// import { Radio } from 'react-bootstrap'
import { Radio, Form } from 'semantic-ui-react'

export default class HomeScript extends Component {
	state = {
		checked: false,
	}

	handleOnChange = () => {
		this.setState({
			checked: !this.state.checked,
		})
	}

	render() {
		const { checked } = this.state
		console.log(checked)
		return (
			<div>
				<Container style={{ padding: '20px' }}>
					<Radio toggle={true} onChange={this.handleOnChange} />
					<p style={{ textAlign: 'left' }}>Available?</p>
					{/* <BootstrapSwitchButton
						checked={checked}
						onlabel='Home'
						offlabel='Not Home'
						onChange={this.handleOnChange}
						width={100}
					/> */}
					<form style={{ textAlign: 'center' }}>
						{checked && (
							<div>
								<Form.Field>
									<h1>Why were you not able to contac this voter?</h1>{' '}
									<b>{this.state.value}</b>
								</Form.Field>
								<Form.Field>
									<Radio
										label='Choose this'
										name='radioGroup'
										value='this'
										checked={this.state.value === 'this'}
										onChange={this.handleChange}
									/>
								</Form.Field>
								<Form.Field>
									<Radio
										label='Or that'
										name='radioGroup'
										value='that'
										checked={this.state.value === 'that'}
										onChange={this.handleChange}
									/>
								</Form.Field>
							</div>
						)}
					</form>
				</Container>
			</div>
		)
	}
}
