
const express = require('express');
const app= express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const path = require("path");

const indexRoute = require('./routes/index.js');
const postsRoute = require('./routes/posts.js');
const submitRoute = require('./routes/submit.js');

app.use(express.static(path.join(__dirname,"public")));
app.use(cors());
app.use('/', indexRoute);
app.use('/posts', postsRoute);
app.use('/submit', submitRoute);

//--Serve static images
app.use('/static', express.static('public'))


app.listen(port, () => console.log(`Example app listening on port${port}`))
