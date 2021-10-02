/** @format */

import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from './'

const SignUp = (email, password) => {
	signInWithEmailAndPassword(Auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user
			console.log(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log(errorCode, errorMessage)
		})
}

export default SignUp
