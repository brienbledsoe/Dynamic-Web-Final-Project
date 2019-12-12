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
router.get("/:id", (req,res)=> {
  let queryID = req.params.id;
  db.collection('Posts')
  .where("userID" == queryID)
  .get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach(doc => {
      posts.push(post.data());

    });
    res.send(posts);
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  })
  //let queryID = req.params;
  let docRef = db.collection("Posts").doc(queryID); //creating a reference to this docRef
  docRef //creating a reference of the document
  .where("userID==")
  .get(getOptions) //getting the information were requesting, have to look at the docs to tell us what we are getting
  .then(doc => res.send(doc.data())) // have to reference doc.data
  .catch(error => res.send(error));

//})

// router.get('/', (req, res) =>(
//   res.send('This is About The about me section')
// ));
// router.get('/me', (req,res) => res.send('About Me'));


module.exports = router;
