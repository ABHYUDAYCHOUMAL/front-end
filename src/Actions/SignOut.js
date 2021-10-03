/** @format */

import { signOut } from 'firebase/auth'
import { Auth } from './'

const SignOut = () => {
	signOut(Auth)
		.then(() => {
			// Sign-out successful.
		})
		.catch((error) => {
			// An error happened.
		})
}

export default SignOut
