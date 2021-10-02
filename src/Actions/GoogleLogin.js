/** @format */

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Auth } from './'
import { AddUser, EditUser, User } from '../Apis'

const provider = new GoogleAuthProvider()

const GoogleLogin = () => {
	signInWithPopup(Auth, provider, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result)
			// const token = credential.accessToken
			// The signed-in user info.
			const { uid, email, displayName, photoURL, emailVerified } = result.user
			const user = {
				uid: uid,
				email: email,
				name: displayName,
				avatar: photoURL,
				emailVerified: emailVerified,
			}
			if (User(uid)) {
				EditUser(uid, user)
				console.log('User already exists')
			} else {
				AddUser(user)
			}
		}
	})
}

export default GoogleLogin
