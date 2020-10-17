const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const admin = require('firebase-admin');
const serviceAccount = require("./config/snighd-volunteer-network-firebase-adminsdk-tjv1e-04ca451310.json");
const ObjectId = require('mongodb').ObjectId;


const formData = require('express-form-data');

const app = express();
const port = 9000;
app.use(cors());
app.use(bodyParser.json());
app.use(formData.parse());
app.use(bodyParser.urlencoded({ extended: false }));



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB
});


console.log()
//connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1sg5c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true  });
client.connect(err => {
  const workCollection = client.db("volunteer-network").collection("works");
  const eventsCollection = client.db("volunteer-network").collection("registrations");
  
  //post the events
  app.post('/addEvents',(req,res)=>{
  eventsCollection.insertOne(req.body)
  .then(result =>{
    res.send(result)
    console.log(result)
    })
  }) 
  //get all events
  app.get('/events',(req,res)=>{
    eventsCollection.find({})
    .toArray((err,document)=>{
      res.send(document)
    })
  })
  //get event for one specific user
  app.get('/events/:email',(req,res)=>{
    const token = req.body
    console.log(token)
    eventsCollection.find({email:req.params.email})
    .toArray((err,document)=>{
      res.send(document)
    })
  })
  //delete events 
  app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    eventsCollection.deleteOne({_id:ObjectId(req.params.id)})
     .then(result =>{
       res.send(result.deletedCount>0)
       console.log(result)
     })
  })
  app.post('/addProgram',(req,res)=>{
    const product = req.body;
    console.log(product)
    workCollection.insertOne(product)
    .then(result =>{
      res.send(result)
      console.log(result)
    })
  })
  app.get('/programs',(req,res)=>{
    workCollection.find({})
    .toArray((err,document)=>{
      res.send(document)
    })
  })
  app.post('/addProduct',(req,res)=>{
    const product = req.body;
    console.log("ii",product)
    // productCollection.insertOne(product)
     .then(result =>{
       res.redirect('/')
    })
})

});



// 
app.get('/',(req,res)=>{
    res.send('Helloooo')
})

app.listen(process.env.PORT || port)