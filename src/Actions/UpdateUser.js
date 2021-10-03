/** @format */

import { updateProfile } from 'firebase/auth'
import { Auth } from './'

const UpdateUser = (data) => {
	updateProfile(Auth.currentUser, {
		displayName: data.displayName,
		photoURL: data.photoURL,
	})
		.then(() => {
			// Profile updated!
			// ...
		})
		.catch((error) => {
			// An error occurred
			// ...
		})
}

export default UpdateUser
