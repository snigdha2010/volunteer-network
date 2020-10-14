const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express();
const port = 9000;
app.use(cors());

console.log()
//connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1sg5c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true  });
client.connect(err => {
  const workCollection = client.db("volunteer-network").collection("works");

});



app.get('/y',(req,res)=>{
    res.send('Helloooo')
})

app.listen(process.env.PORT || port)