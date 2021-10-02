/** @format */

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Auth } from './'

const SignIn = (email, password) => {
	createUserWithEmailAndPassword(Auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user
			console.log(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			// ..
		})
}

export default SignIn
