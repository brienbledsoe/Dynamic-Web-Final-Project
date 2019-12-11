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
  let queryID = req.params.id;
  let docRef = db.collection("Posts").doc(queryID); //creating a reference to this docRef
  docRef //creating a reference of the document
  .get(getOptions) //getting the information were requesting, have to look at the docs to tell us what we are getting
  .then(doc => res.send(doc.data())) // have to reference doc.data
  .catch(error => res.send(error));

})

// router.get('/', (req, res) =>(
//   res.send('This is About The about me section')
// ));
// router.get('/me', (req,res) => res.send('About Me'));


module.exports = router;
