/** @format */

import axios from 'axios'

const EditUser = async (id, data) => {
	try {
		const url =
			process.env.NODE_ENV === 'production'
				? `${process.env.REACT_APP_API_URL}/user/${id}/update`
				: `http://localhost:8080/user/${id}/update`
		const response = await axios.put(url, data)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default EditUser
