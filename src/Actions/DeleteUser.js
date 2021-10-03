/** @format */

import { deleteUser } from 'firebase/auth'
import { Auth } from './'

const DeleteUser = () => {
	const user = Auth.currentUser
	deleteUser(user, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log('User deleted')
			console.log(user)
		}
	})
}

export default DeleteUser
