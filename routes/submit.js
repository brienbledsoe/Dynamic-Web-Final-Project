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

 //set sample data to submit upon request. Make sure we have it connected and that we are sending data and
 //that it works

 const sampleData = {
   title: 'Test',
   test: 'Test Text',
   author: 'Brien Bledsoe'
 }

//Test Route
router.get("/test", (req,res)=>{
//this code is making sure that our process is working
//the user is going to come to the node server but they are not posting any data
//the get is just the user coming to the node server
//were not posting to our server we are just getting data at this moment
//the user simply wants to hit an endpoint and the node server is making a post request so we are creating a get
//request to make this happend
    try{
      db.collection("Posts")
      //setting an ID for the test doc
      .doc("test-doc") //setting the doc name
      .set(sampleData) //setting the doc to be our test-doc object
      return res.send(`${sampleData} Test Data Submitted`)
    }catch(e){
      return res.send(`${e} There is an error`)
    }

})
//submit data
router.get("/", (req,res)=>{
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
