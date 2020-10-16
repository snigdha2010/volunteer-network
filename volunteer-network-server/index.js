const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const formData = require('express-form-data');

const app = express();
const port = 9000;
app.use(cors());
app.use(bodyParser.json());
app.use(formData.parse());
app.use(bodyParser.urlencoded({ extended: false }));


console.log()
//connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1sg5c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true  });
client.connect(err => {
  const workCollection = client.db("volunteer-network").collection("works");
  const registrationCollection = client.db("volunteer-network").collection("registrations");
  app.post('/addUser',(req,res)=>{
  registrationCollection.insertOne(req.body)
  .then(result =>{
    res.send(result)
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