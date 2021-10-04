/** @format */

import React from 'react'
import LoginForm from './../Components/LoginForm'
class Login extends React.Component {
	render() {
		return (
			<>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						textAlign: 'center',
					}}>
					<LoginForm />
				</div>
			</>
		)
	}
}

export default Login
