/** @format */

import { reauthenticateWithCredential } from 'firebase/auth'
import { Auth } from './'

const user = Auth.currentUser

// TODO(you): prompt the user to re-provide their sign-in credentials
// const credential = user.reauthenticateWithCredential(credential)
const ReAuth = () => {
	reauthenticateWithCredential(user)
		.then(() => {
			// User re-authenticated.
		})
		.catch((error) => {
			// An error ocurred
			// ...
		})
}

export default ReAuth
