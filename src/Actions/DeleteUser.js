/** @format */

import { deleteUser } from 'firebase/auth'
import { Auth } from './'

const DeleteUser = () => {
	const user = Auth.currentUser
	deleteUser(user)
		.then((result) => {
			console.log('User deleted')
			console.log(result)
		})
		.catch((error) => {
			console.log(error)
		})
}

export default DeleteUser
