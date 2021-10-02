/** @format */

import axios from 'axios'

const EditHospital = async (id, data) => {
	const url =
		process.env.NODE_ENV === 'production'
			? `${process.env.REACT_APP_API_URL}/hospital/${id}/update`
			: `http://localhost:8080/hospital/${id}/update`
	const response = await axios.put(url, data)
	return response.data
}

export default EditHospital
