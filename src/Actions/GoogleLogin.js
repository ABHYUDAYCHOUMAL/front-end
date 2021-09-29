/** @format */

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from './Firebase'
import { AddUser, EditUser, User } from '../Apis'

const provider = new GoogleAuthProvider()

const GoogleLogin = () => {
	signInWithPopup(app, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result)
			// const token = credential.accessToken
			// The signed-in user info.
			const details = result.user
			console.log(details)
			if (!User(details.uid)) {
				AddUser(details)
			} else {
				EditUser(details.uid, details)
			}
		})
		.catch((error) => {
			console.log(error)
		})
}

export default GoogleLogin
