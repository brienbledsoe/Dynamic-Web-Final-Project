const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDLyFPNwUo7NTVmil332XCKolfmIHRv9Fo",
	authDomain: "social-media-final.firebaseapp.com",
	databaseURL: "https://social-media-final.firebaseio.com",
	projectId: "social-media-final",
	//storeageBUcket: "",
	//messagingSenderId: "",
	//appID: "",
	//mesurementID: ""
  storageBucket: "social-media-final.appspot.com",
  messagingSenderId: "1056094188664",
  appId: "1:1056094188664:web:05eef68c7186be85f3e98d",

}
 if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
 }
 const db = firebase.firestore();
 /* **** End Firebase Config ***** */
 //Route: /post/:id
 const getOptions = {
   source:'cache'
 }
//router.get("/:id", (req,res)=> previous code in line below, I'm removing
//the :id behind the forward slash now in the line below
router.get("/", (req,res)=> {
  //need to get a URL parameter here in node, how do we do this?
  /* ex: localhost:4000/submit?title=title&text=text&author=authornamewhatever*/
  //console.log(req.query) says its apart of node which has a lot of other options and information
  let year = req.query.currYear ? req.query.currYear: '';
  let major = req.query.currentMajor ? req.query.currentMajor: '';
  let name = req.query.name ? req.query.name: '';
  let salary = req.query.salary ? req.query.salary: '';
  let university = req.query.university ? req.query.university: '';
  let question = req.query.userQuestion ? req.query.userQuestion: '';
  //let author = req.query.author ? req.query.author: '';

  db.collection("Posts")
  .add({
    //will automatically generate an ID for this post
    //title: titleVal,
    //text: textVal,
    //author: author
    currYear: year,
    currentMajor: major,
    name: name,
    salary: salary,
    university: university,
    userQuestion: question
  })
  .then(ref => res.send(ref))
  .catch(e => res.send(e));
})
module.exports = router;
