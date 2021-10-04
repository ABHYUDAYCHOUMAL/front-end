/** @format */

import React from 'react'

class Head extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title ? props.title : '',
			description: props.description ? props.description : '',
			keywords: props.keywords ? props.keywords : '',
		}
	}

	render() {
		return (
			<>
				<title>{this.state.title}</title>
				<meta name='description' content={this.state.description} />
				<meta name='keywords' content={this.state.keywords} />
			</>
		)
	}
}

export default Head
