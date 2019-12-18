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
  client.close()
});

const db = mongoose.connection

// MyModel = mongoose.model('Users', { name: { type: String } });

app.prepare()
 .then(() => {
     const Api = express.Router()
     
     const server = express() 
     server.use('/api', Api)
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
      if (req.path == '/login') {
        return next()
      }
      const token = req.headers.authorization
      try {
        var decoded = jwt.verify(token, jwtSecret);
        console.log("decoded", decoded)
      } catch (err) {
        return res.status(401).json({ "msg": err.message })
      }
      next()
    });

    server.get('/favicon.ico', (req, res) => res.status(204))
    server.get('/dado',(req,res)=>{
      db.collection('Users').insert({name:'kutala',lastname:'butala'})
      res.send('vaime')
    })

    Api.get("/ping", (req, res) => {
      // random endpoint so that the client can call something
      res.json({ "msg": "pong" })
    });

    Api.get("/token/ping", (req, res) => {
      // random endpoint so that the client can call something
      res.json({ "msg": "pong" })
    });


    Api.get("/login", (req, res) => {
      // generate a constant token, no need to be fancy here
      const token = jwt.sign({ "username": "Mike" }, jwtSecret, { expiresIn: 6000000000 }) // 1 min token
      // return it back
      res.json({ "token": token })
    });

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