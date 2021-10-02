/** @format */

import axios from 'axios'

const AddUser = async (data) => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/user/add`
			: 'http://localhost:8080/user/add'
	const response = await axios.post(url, data)
	return response.data
}

export default AddUser
