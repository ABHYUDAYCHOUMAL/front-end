/** @format */

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Auth } from './'
import { AddUser } from '../Apis'

const SignIn = (email, password) => {
	createUserWithEmailAndPassword(Auth, email, password)
		.then((result) => {
			// Signed in
			const { uid, email, displayName, photoURL, emailVerified } = result.user
			const user = {
				uid: uid,
				email: email,
				name: displayName,
				avatar: photoURL,
				emailVerified: emailVerified,
			}
			console.log(user)
			AddUser(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log(errorCode, errorMessage)
			// ..
		})
}

export default SignIn
