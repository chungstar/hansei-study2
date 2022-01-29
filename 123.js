function uploadSummernoteImageFile(file, editor) {
	console.log('upload image 호출됨')

	var upfile = file
	console.log('upload file: ', upfile.name)
	var storageUrl = 'image/' + upfile.name
	var storageUpRef = ref(storageUrl)

	var task = storageUpRef.put(file)

	task.on(
		'state_changed',
		function (snapshot) {
			console.log('업로드중..')
		},
		function (error) {},
		function () {
			console.log('업로드완료')
			var storageRef = ref()
			storageRef
				.child(storageUrl)
				.getDownloadURL()
				.then(function (url) {
					console.log('url is : ', url)
					$('#summernote').summernote('insertImage', url, 'test')
				})
				.catch(function (error) {
					console.log(error)
				})
		}
	)
}
