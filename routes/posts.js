const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDLyFPNwUo7NTVmil332XCKolfmIHRv9Fo",
	authDomain: "social-media-final.firebaseapp.com",
	databaseURL: "https://social-media-final.firebaseio.com",
	projectId: "social-media-final",
  storageBucket: "social-media-final.appspot.com",
  messagingSenderId: "1056094188664",
  appId: "1:1056094188664:web:05eef68c7186be85f3e98d",

}
 if(!firebase.apps.length){
   console.log("in firebase if")

   firebase.initializeApp(firebaseConfig);
 }
 const db = firebase.firestore();
 /* **** End Firebase Config ***** */
//router.get("/:id", (req,res)=> previous code in line below, I'm removing
//the :id behind the forward slash now in the line below
let posts =[]

router.get("/:id", (req,res)=> {

  //console.log("in posts/id");
  let queryID = req.params.id;

  db.collection('Posts')
  .where("userID", "==" , queryID)
  .get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach(doc => {
      // console.log(doc)
      posts.push(doc.data());

    });

  })
  .catch(err => {
    console.log('Error getting documents', err);


  });
  console.log("These are the users posts", posts);
  res.send(posts);
  })




module.exports = router;
