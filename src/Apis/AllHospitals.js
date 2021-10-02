/** @format */

import axios from 'axios'

const AllHospitals = () => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/hospital/view`
			: 'http://localhost:8080/hospital/view'
	const response = axios.get(url)
	return response.then((response) => response.data)
}

export default AllHospitals
