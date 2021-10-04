/** @format */

import { updateProfile } from 'firebase/auth'
import { Auth } from './'

const UpdateUser = (displayName, photoURL) => {
	updateProfile(Auth.currentUser, {
		displayName: displayName,
		photoURL: photoURL,
	})
		.then((result) => {
			// Profile updated!
			// ...
			console.log('Profile updated!')
			console.log(result)
		})
		.catch((error) => {
			// An error occurred
			// ...
		})
}

export default UpdateUser
