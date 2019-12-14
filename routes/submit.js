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
   firebase.initializeApp(firebaseConfig);
 }
 const db = firebase.firestore();
 /* **** End Firebase Config ***** */

router.get("/", (req,res)=>{
  let year = req.query.currYear ? req.query.currYear: '';
  let major = req.query.currentMajor ? req.query.currentMajor: '';
  let name = req.query.name ? req.query.name: '';
  let salary = req.query.salary ? req.query.salary: '';
  let university = req.query.university ? req.query.university: '';
  let question = req.query.userQuestion ? req.query.userQuestion: '';
  let uid = req.query.userID ? req.query.userID: '';

  db.collection("Posts")
  .add({
    currYear: year,
    currentMajor: major,
    name: name,
    salary: salary,
    university: university,
    userQuestion: question,
    userID: uid
  })
  .then(ref => res.send(ref))
  .catch(e => res.send(e));
})
module.exports = router;
