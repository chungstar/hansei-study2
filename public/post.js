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
// import dotenv from '/dotenv';
var dotenv = require('dotenv');
dotenv.config();
// import SimpleUploadAdapter from '/@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

ClassicEditor.create(document.querySelector('#editor'), { plugins: [SimpleUploadAdapter] }).catch(
	(error) => {
		console.error(error);
	}
);
// $(document).ready(function () {             $('#summernote').summernote({
// height: 600,                 toolbar: [                     [ 'style', [
// 'bold', 'italic', 'underline', 'clear' ] ],                     [
// 'fontname', ['fontname'] ],                     [
// 'fontsize', ['fontsize'] ], [                         'color', ['color'] ],
// [ 'para', ['paragraph'] ],                     [ 'height', ['height'] ],
// [ 'table', ['table'] ],                     [
// 'insert', [                             'link', 'picture', 'video' ] ]
// ],                 lang: 'ko-KR', callbacks: { onImageUpload: (files, editor,
// welEditable)
// => {                          uploadSummernoteImageFile(files[0], this) } }
// });         })          기본 폰트 사이즈 변경 $('#summernote').summernote('fontSize',
// 15); $("#summernote").summernote({ toolbar: [                 ['para',
// ['ul']]             ],             focus: true, disableResizeEditor: true
// });          하단 사이즈 조절 바 삭제 $('.note-statusbar').hide();

console.log('helloworld');

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

const testBtn = document.querySelector('#testBtn');

const uploadBtn = document.querySelector('#uploadBtn');
const category = document.querySelector('#category-select');
const open = document.querySelector('#open-select');
const title = document.querySelector('#title');
const description = document.querySelector('textarea');
const hashtag = document.querySelector('#hashtag');

const uploadSummernoteImageFile = (file, editor) => {
	console.log('upload image 호출!!');

	const imageFile = file;

	console.log('image file : ', imageFile);

	// const storageUrl = 'images/' + imageFile.name const storageRef = ref(storage,
	// storageUrl) const task = uploadString(storageRef, )
};

testBtn.addEventListener('click', async () => {
	// await addDoc(collection(db, 'posts'), {  category: category.value,  open:
	// open.value,  title: title.value,  description: description.value,  hashtag:
	// hashtag  .value  .split(' ')  }) uploadString(storageFileRef, message,
	// 'data_url').then((snapshot) => {   console.log('Uploaded a data_url
	// string!'); })
});

// 등록 버튼 클릭 시 firestore에 게시글 저장
uploadBtn.addEventListener('click', async (event) => {
	event.preventDefault();

	await addDoc(collection(db, 'posts'), {
		category: category.value,
		open: open.value,
		title: title.value,
		description: description.value,
		hashtag: hashtag.value.split(' '),
	});
});

// try { const docRef = async () => { await addDoc(collection(db, 'posts'), {
// category: category.value, public: '', title: '', description: '', hashtag:
// '', }) } console.log('Document written with ID: ', docRef.id) } catch (e) {
// console.error('Error adding document: ', e) }
