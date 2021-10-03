/** @format */

import { updateProfile } from 'firebase/auth'
import { Auth } from './'

const UpdateUser = (displayName, photoURL) => {
	updateProfile(Auth.currentUser, {
		displayName: displayName,
		photoURL: photoURL,
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
