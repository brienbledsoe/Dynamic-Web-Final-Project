const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "process.env.local",
	authDomain: "social-media-final.firebaseapp.com",
	databaseURL: "https://social-media-final.firebaseio.com",
	projectId: "social-media-final",
	//storeageBUcket: "",
	//messagingSenderId: "",
	//appID: "",
	//mesurementID: ""

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
			console.log('blogPosts',blogPosts);
		}
	)
	.catch(err => {
		console.log('error',err);
	})

	router.get('/',(req,res) => {
		res.send(posts);
	})

	module.exports = router;
