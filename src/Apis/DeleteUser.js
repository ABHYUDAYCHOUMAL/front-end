/** @format */

import axios from 'axios'

const DeleteHospital = async (id) => {
	try {
		const url =
			process.env.NODE_ENV === 'production'
				? `${process.env.REACT_APP_API_URL}/user/${id}/delete`
				: `http://localhost:8080/user/${id}/delete`
		const response = await axios.delete(url)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default DeleteHospital
