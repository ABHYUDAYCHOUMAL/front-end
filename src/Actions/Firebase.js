/** @format */

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
	apiKey: 'AIzaSyAmHd7jaqq6kh-vBVC-wl_WWNnol5f-KfU',
	authDomain: 'project-india-2021.firebaseapp.com',
	projectId: 'project-india-2021',
	storageBucket: 'project-india-2021.appspot.com',
	messagingSenderId: '880744710305',
	appId: '1:880744710305:web:de46ad9daa2afa82ffb0e0',
	measurementId: 'G-HLCE744S1F',
})

const Auth = getAuth(app)

export default Auth
