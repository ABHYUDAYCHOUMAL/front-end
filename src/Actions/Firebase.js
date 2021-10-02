/** @format */

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
	apiKey: 'AIzaSyA2CPIpiH7NcDlfLSbS7ITHBtQU2dLT3bU',
	authDomain: 'raione-iiitr.firebaseapp.com',
	projectId: 'raione-iiitr',
	storageBucket: 'raione-iiitr.appspot.com',
	messagingSenderId: '1070260637828',
	appId: '1:1070260637828:web:de142eb16ac4112dbcf2d1',
	measurementId: 'G-84RNQJCMQZ',
})

const Auth = getAuth(app)

export default Auth
