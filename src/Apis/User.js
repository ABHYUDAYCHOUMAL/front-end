/** @format */

import axios from 'axios'

const User = async (id) => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/user/${id}/view`
			: `http://localhost:8080/user/${id}/view`
	const response = await axios.get(url)
	return response.data
}

export default User
