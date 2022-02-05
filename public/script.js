
const firebaseConfig = {
    apiKey: "AIzaSyDJXIwvAOztzHf7WyXCSdJjjy9FNJenCic",
    authDomain: "blog-f9abc.firebaseapp.com",
    projectId: "blog-f9abc",
    storageBucket: "blog-f9abc.appspot.com",
    messagingSenderId: "982347300281",
    appId: "1:982347300281:web:d197799c076b0463db8a68",
    measurementId: "G-6G254LGX0S"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
var db = firebase.firestore();
async function change(id) {
 const postsRef = db.collection('post');
 id = document.getElementById("filter");
 var storage = firebase.storage();
 var storageRef = storage.ref();
 if (id.value == "date") {
   document.querySelector('.media').innerHTML = ``; //.media에 있는 요소들을 공백화함
   const firstThreeRes = await postsRef.orderBy('docId', 'desc').get();//문서ID(시간순으로 되어있음)대로 정렬

   firstThreeRes.forEach(doc => {
     console.log(doc.id, '->', doc.data());
     var temp = `<div class="post">


<div class="subn">
<a href="#!" class="pn">${doc.data().title}</a>
</div><br>

<br>
<div class="content">
<img class="postimg" src='${doc.data().imageUrl}'>
<div class="pp">
   <ppp>${doc.data().text}</ppp>
</div>
<br><br><br>

<div class="icons">
   <img src="./assets/topcoat_like.png" width="15px">&nbsp${doc.data().like}&nbsp
   <img src="./assets/fa-regular_comment-dots.png" width="15px">&nbsp ${doc.data().댓글}
</div>
</div>
<br><hr><br>
</div>`;
     $('.media').append(temp);


   })


     ;

 }
 else if (id.value == "like") {
   document.querySelector('.media').innerHTML = ``; //.media에 있는 요소들을 공백화함
   const firstThreeRes = await postsRef.orderBy('like', 'desc').get();//좋아요순대로 정렬
  
   firstThreeRes.forEach(doc => {
     console.log(doc.id, '->', doc.data());
     var temp1 = `<div class="post">


<div class="subn">
<a href="#!" class="pn">${doc.data().title}</a>
</div><br>

<br>
<div class="content">
<img class="postimg" src='${doc.data().imageUrl}'>
<div class="pp">
   <ppp>${doc.data().text}</ppp>
</div>
<br><br><br>

<div class="icons">
   <img src="./assets/topcoat_like.png" width="15px">&nbsp${doc.data().like}&nbsp
   <img src="./assets/fa-regular_comment-dots.png" width="15px">&nbsp ${doc.data().댓글}
</div>
</div>
<br><hr><br>
</div>`;
     $('.media').append(temp1);


   })


     ;
 }
 


}


db.collection('post').get().then((결과) => {
 결과.forEach((doc) => {
   console.log(doc.data());// 걍 기본정렬
   var temp = `<div class="post">


<div class="subn">
<a href="#!" class="pn">${doc.data().title}</a>
</div><br>

<br>
<div class="content">
<img class="postimg" src='${doc.data().imageUrl}'>
<div class="pp">
   <ppp>${doc.data().text}</ppp>
</div>
<br><br><br>

<div class="icons">
   <img src="./assets/topcoat_like.png" width="15px">&nbsp${doc.data().like}&nbsp
   <img src="./assets/fa-regular_comment-dots.png" width="15px">&nbsp ${doc.data().댓글}
</div>
</div>
<br><hr><br>
</div>`;
   $('.media').append(temp);


 })

})



