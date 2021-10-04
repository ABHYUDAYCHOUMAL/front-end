/** @format */

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Auth } from './'
import { AddUser, EditUser, User } from '../Apis'

const provider = new GoogleAuthProvider()

const GoogleAuth = () => {
	signInWithPopup(Auth, provider)
		.then(async (result) => {
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
			console.log(user)
			if (await User(uid)) {
				console.log('user exist')
				EditUser(uid, user)
			} else {
				console.log('user not exist')
				AddUser(user)
			}
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code
			const errorMessage = error.message
			// The email of the user's account used.
			const email = error.email
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential
			// ...
			console.log(errorCode + errorMessage + email + credential)
		})
}

export default GoogleAuth
