/** @format */

import axios from 'axios'

const Hospital = async (id) => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/hospital/${id}/view`
			: `http://localhost:8080/hospital/${id}/view`
	const response = await axios.get(url)
	return response.data
}

export default Hospital
