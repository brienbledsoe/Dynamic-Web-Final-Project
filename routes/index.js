const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "process.env.local",
	authDomain: "social-media-final.firebaseapp.com",
	databaseURL: "https://social-media-final.firebaseio.com",
	projectId: "social-media-final",
	storageBucket: "social-media-final.appspot.com",
  messagingSenderId: "1056094188664",
  appId: "1:1056094188664:web:05eef68c7186be85f3e98d",

}

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];
db.collection('Posts').get()
	.then(
		blogPosts => {
      blogPosts.forEach(post => {
			posts.push(post.data());
    });
			// console.log('blogPosts',blogPosts);
		}
	)
	.catch(err => {
		console.log('error',err);
	})

	router.get('/',(req,res) => {
		res.send(posts);
	})

	module.exports = router;
