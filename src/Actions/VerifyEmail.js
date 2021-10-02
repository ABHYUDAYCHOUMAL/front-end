/** @format */

import { sendEmailVerification } from 'firebase/auth'
import { Auth } from './'

const VerifyEmail = () => {
	sendEmailVerification(Auth.currentUser).then(() => {
		// Email verification sent!
		// ...
	})
}

export default VerifyEmail
