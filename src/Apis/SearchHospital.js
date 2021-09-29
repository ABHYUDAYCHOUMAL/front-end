/** @format */

import axios from 'axios'

const SearchHospital = async ({ longitude, latitude, radius }) => {
	try {
		const url =
			process.env.NODE_ENV === 'production'
				? `${process.env.REACT_APP_API_URL}/hospital/search?lon=${longitude}&lat=${latitude}&radius=${radius}`
				: `http://localhost:8080/hospital/search?lon=${longitude}&lat=${latitude}&radius=${radius}`

		const response = await axios.get(url)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export default SearchHospital
