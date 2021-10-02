/** @format */

import axios from 'axios'

const AllHospitals = async () => {
	try {
		const url =
			process.env.NODE_ENV === 'production'
				? `${process.env.REACT_APP_API_URL}/hospital/view`
				: 'http://localhost:8080/hospital/view'
		const response = await axios.get(url)
		console.log(response)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default AllHospitals
