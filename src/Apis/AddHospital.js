/** @format */

import axios from 'axios'

const AddHospital = async (data) => {
	try {
		const url =
			process.env.NODE_ENV === 'production'
				? `${process.env.REACT_APP_API_URL}/hospital/add`
				: 'http://localhost:8080/hospital/add'
		const response = await axios.post(url, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
export default AddHospital
