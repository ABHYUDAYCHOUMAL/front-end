/** @format */

import { sendPasswordResetEmail } from 'firebase/auth'
import { Auth } from './'

const ResetPassword = (email) => {
	sendPasswordResetEmail(Auth, email)
		.then(() => {
			// Password reset email sent!
			// ..
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
            console.log(errorCode, errorMessage)
			// ..
		})
}

export default ResetPassword
