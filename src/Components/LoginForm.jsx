/** @format */

import React from 'react'
import { Card, CardContent, Button, Typography, TextField } from '@material-ui/core'

class LoginForm extends React.Component {
	render() {
		return (
			<>
				<Card>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Login
						</Typography>
						<form>
							<TextField id='email' label='E-Mail' variant='outlined' />
							<TextField id='password' label='Password' variant='outlined' />
							<Button variant='contained' type='submit'>
								Login
							</Button>
						</form>
						<Button variant='contained' type='submit'>
							Google SignUp
						</Button>
					</CardContent>
				</Card>
			</>
		)
	}
}

export default LoginForm
