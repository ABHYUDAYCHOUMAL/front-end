/** @format */

import { updateEmail } from 'firebase/auth'
import { Auth } from './'

const UpdateEmail = (newEmail) => {
	updateEmail(Auth.currentUser, newEmail)
		.then(() => {
			// Email updated!
			// ...
		})
		.catch((error) => {
			// An error occurred
			// ...
		})
}

export default UpdateEmail
