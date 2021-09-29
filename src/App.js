/** @format */

import React from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import BasicEditingGrid from './Search.jsx'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			hospitals: [],
			type: '',
			openTime: '',
			closeTime: '',
			contact: '',
			facilities: '',
			locationX: '',
			locationY: '',
			email: '',
			name: '',
		}
	}
	componentDidMount() {
		axios.get('http://localhost:8080/hospital/view').then((res) => {
			const hospitals = res.data
			this.setState({ hospitals })
			console.log(hospitals)
		})

		navigator.geolocation.getCurrentPosition(function (position) {
			console.log('Latitude is :', position.coords.latitude)
			console.log('Longitude is :', position.coords.longitude)
		})
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value,
		})
		console.log(event.target.id + ' changed to ' + event.target.value)
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		let details = {
			name: this.state.name,
			email: this.state.email,
			type: this.state.type,
			openTime: this.state.openTime,
			closeTime: this.state.closeTime,
			contact: this.state.contact,
			facilities: this.state.facilities,
			location: [this.state.locationX, this.state.locationY],
		}
		console.log(details)
		axios
			.post('http://localhost:8080/hospital/store', details)
			.then((res) => {
				console.log(res)
				this.componentDidMount()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				<BasicEditingGrid />
				{this.state.hospitals.map((e) => {
					return (
						<div className={e.name} key={e._id}>
							<p>
								{e.name} - {e.location}
							</p>
						</div>
					)
				})}
				<form noValidate onSubmit={this.handleSubmit.bind(this)} autoComplete='off'>
					<TextField
						defaultValue={this.state.type}
						onChange={this.handleChange.bind(this)}
						id='type'
						label='type'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.openTime}
						onChange={this.handleChange.bind(this)}
						id='openTime'
						label='openTime'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.closeTime}
						onChange={this.handleChange.bind(this)}
						id='closeTime'
						label='closeTime'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.contact}
						onChange={this.handleChange.bind(this)}
						id='contact'
						type='number'
						label='contact'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.facilities}
						onChange={this.handleChange.bind(this)}
						id='facilities'
						label='facilities*'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.locationX}
						onChange={this.handleChange.bind(this)}
						id='locationX'
						type='number'
						label='locationX'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.locationY}
						onChange={this.handleChange.bind(this)}
						id='locationY'
						type='number'
						label='locationY'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.email}
						onChange={this.handleChange.bind(this)}
						id='email'
						label='email'
						variant='outlined'
					/>
					<TextField
						defaultValue={this.state.name}
						onChange={this.handleChange.bind(this)}
						id='name'
						label='name'
						variant='outlined'
					/>
					<Button variant='contained' type='submit '>
						Submit
					</Button>
				</form>
			</div>
		)
	}
}

export default App
