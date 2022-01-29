import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import {
	getFirestore,
	collection,
	addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js';
import {
	getStorage,
	ref,
	uploadString,
	getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-storage.js';

const firebaseConfig = {
	apiKey: 'AIzaSyAwBAj3d2YDACIRMCdIfT8OpH5SEVDxVS0',
	authDomain: 'blog-pj-b6a4e.firebaseapp.com',
	projectId: 'blog-pj-b6a4e',
	storageBucket: 'blog-pj-b6a4e.appspot.com',
	messagingSenderId: '857327371964',
	appId: '1:857327371964:web:b316e6a45eeb07d05132b9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
// const storageRef = ref()
