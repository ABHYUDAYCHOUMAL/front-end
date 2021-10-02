/** @format */

import { updatePassword } from 'firebase/auth'
import { Auth } from './'

const user = Auth.currentUser
const UpdatePassword = (newPassword) => {
	updatePassword(user, newPassword)
		.then(() => {
			// Update successful.
		})
		.catch((error) => {
			// An error ocurred
			// ...
		})
}

export default UpdatePassword
