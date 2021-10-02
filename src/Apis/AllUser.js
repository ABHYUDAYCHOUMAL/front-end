/** @format */

import axios from 'axios'

const AllUser = async () => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/user/view`
			: 'http://localhost:8080/user/view'
	const response = await axios.get(url)
	return response.data
}

export default AllUser
