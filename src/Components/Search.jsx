/** @format */

import React from 'react'
import axios from 'axios'
import { AllHospitals, SearchHospital } from '../Apis'
import { SearchCard } from '../Components'
class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			radius: 2500,
			hospitals: [],
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			// console.log(position)
			SearchHospital(position.coords.longitude, position.coords.latitude, this.state.radius)
				.then((hospitals) => {
					console.log(hospitals)
					this.setState({ hospitals })
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}
	render() {
		return (
			<>
				<h1>Your nearby hospital</h1>
				<SearchCard hospitals={this.state.hospitals} />
			</>
		)
	}
}

export default Search
