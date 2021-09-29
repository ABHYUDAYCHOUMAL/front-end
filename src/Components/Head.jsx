/** @format */

import React from 'react'

class Head extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			description: props.description,
			keywords: props.keywords,
		}
	}

	render() {
		return (
			<>
				<title>{this.state.title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta name='description' content={this.state.description} />
				<meta name='keywords' content={this.state.keywords} />
			</>
		)
	}
}

export default Head
