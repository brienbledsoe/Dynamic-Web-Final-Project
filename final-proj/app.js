
const express = require('express');
const app= express();
const port = process.env.PORT || 4000;
const path = require("path");

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/posts.js');
//Submit data
const submitRoute = require('./routes/submit.js');
/*Serve files in express*/
app.use(express.static(path.join(__dirname,"public")));
app.use('/', indexRoute);
app.use('/about', aboutRoute);
//set submit data route
app.use('/submit', submitRoute);
//Here we're going to set up a form to submit from. We already have an
//endpoint
app.use("/submit-form", (req,res) =>
  res.sendFile("/public/form.html", {root: __dirname})
);
/*
app.get('/', (req,res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/
//--Serve static images
app.use('/static', express.static('public'))
//http://localhost:4000/static/LinkedInHeadshot_copied_inage.jpg this is the file path to locate the image in the browser after I type
//npm start in the terminal

app.listen(port, () => console.log(`Example app listening on port${port}`))
