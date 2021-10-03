/** @format */

import React from 'react'
import ProjectIndia2021 from '../Images/Project-India-2021.png'

class Home extends React.Component {
	render() {
		return (
			<>
				<img
					src={ProjectIndia2021}
					alt='Project India 2021'
					width='300'
					height='300'
					style={{
						borderRadius: '25%',
					}}
				/>
				<h1>Project India 2021</h1>
			</>
		)
	}
}

export default Home
