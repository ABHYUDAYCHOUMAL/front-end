/** @format */

import React from 'react'
import { Card, CardContent, Button, Typography, TextField, Divider, Chip } from '@mui/material'
import { GoogleAuth } from '../Actions'

class LoginForm extends React.Component {
	render() {
		return (
			<>
				<Card
					style={{
						width: '30%',
					}}>
					<CardContent>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								padding: '5px',
							}}>
							<Typography variant='h4' gutterBottom>
								Login
							</Typography>
						</div>
						<div style={{ padding: '10px' }}>
							<form noValidate>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										padding: '10px',
									}}>
									<TextField
										id='email'
										label='E-Mail'
										variant='outlined'
										type='email'
									/>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										padding: '10px',
									}}>
									<TextField
										id='password'
										label='Password'
										variant='outlined'
										type='password'
									/>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										padding: '10px',
									}}>
									<Button variant='contained' type='submit'>
										Login
									</Button>
								</div>
							</form>
						</div>
						<Divider>
							<Chip label='OR' />
						</Divider>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								padding: '10px',
							}}>
							<Button variant='outlined' onClick={() => GoogleAuth()}>
								Google Login
							</Button>
						</div>
					</CardContent>
				</Card>
			</>
		)
	}
}

export default LoginForm
