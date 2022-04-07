const express = require('express')
const comment=require('./routes/Comment')
const cors=require('cors');

const app = express()
const port = (process.env.PORT || 5000)

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get(('/'),cors(), (req, res) => {


  res.send('Hello World!')
 
})

app.use('/api',cors(),comment)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})