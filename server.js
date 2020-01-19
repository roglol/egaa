const next = require('next')
const express = require('express')
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const jwt = require('jsonwebtoken');
const jwtSecret = "mysuperdupersecret";

const mongoose = require('mongoose')

mongoose.connect(`mongodb://granot:granot1717@ds157185.mlab.com:57185/granot`,{ useNewUrlParser: true, useUnifiedTopology: true },(err,client)=>{
  // client.close()
});

const db = mongoose.connection

const User = require('./models/Users');
const Product = require('./models/Products');
const Category = require('./models/Categories');


app.prepare()
 .then(() => {
     const Api = express.Router()  
     const server = express() 
     server.use('/api', Api)
     server.use('/public', express.static(__dirname + '/public'));
     Api.use(bodyParser.json()) 
     Api.use(bodyParser.urlencoded({extended:true}))
     Api.use(function (req, res, next) {
      // Allow Origins
      res.header("Access-Control-Allow-Origin", "*");
      // Allow Methods
      res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      // Allow Headers
      res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization");
      // Handle preflight, it must return 200
      if (req.method === "OPTIONS") {
        // Stop the middleware chain
        return res.status(200).end();
      }
      // Next middleware 
      next();
    });

    Api.use((req, res, next) => {   
      if (req.path == '/login' || req.path =='/register' || req.path == '/products') {
        return next()
      }
      const token = req.headers.authorization
      try {
        jwt.verify(token, jwtSecret);
      } catch (err) {
        return res.status(401).json({ "msg": err.message })
      }
      next()
    });

    server.get('/favicon.ico', (req, res) => res.status(204));
     server.get("/products/:category", (req, res) => app.render(req, res, `/`, {category:req.params.category}));
    
    Api.get("/token/ping", (req, res) => {
      // random endpoint so that the client can call something
      res.send({'msg':'token is valid'})
    });


    Api.post("/login", (req, res) => {
      const body = {...req.body}
      // generate a constant token, no need to be fancy here
      User.findOne ({
        email: body.email,
        password: body.password
      }, function(err, user) {
        if (!user) 
        {
          res.status(404).send({message:'No such user was found'})
        }else{
          const token = jwt.sign(body, jwtSecret, { expiresIn: 6000000000 }) 
          res.status(200).send({
            token
          })
        }
      })
    });
    Api.post("/register", (req, res) => {
       const body = {...req.body}
       const newUser = new User({
         _id: new mongoose.Types.ObjectId(),
         ...body
        })
       newUser.save().then(result=>{
         res.status(200).send({message:'Success !'})
       }).catch(error=>{
        res.status(400).send({message: 'This is a fucking error!'});
       })
    });

    Api.post("/categories", (req,res) =>{
      const body = {...req.body}
      const newCategory = new Category({
        _id: new mongoose.Types.ObjectId(),
        ...body
       })
       newCategory.save().then(result=>{
        res.status(200).send({message:'Success !'})
      }).catch(error=>{
       res.status(400).send({message: 'This is a fucking error!'});
      })
    })
    Api.post("/products", (req,res) =>{
      const body = {...req.body}
      const newProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        ...body
       })
       newProduct.save().then(result=>{
        res.status(200).send({message:'Success !'})
      }).catch(error=>{
       res.status(400).send({message: 'This is a fucking error!'});
      })
    })

    Api.get("/categories", (req,res) =>{
      Category.find({}, function(err, categories) {
      res.send(categories);  
    })
  })
     
     
     server.get('*', (req,res) =>{
         return handle(req,res)
     })

  server.listen(3001, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${3001}`)
  })
})