const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
require('dotenv').config()
const nodemailer = require('nodemailer')
const authCtrl = require('./controllers/authCtrl')
const requestCtrl = require('./controllers/requestCtrl')

const productCtrl = require('./controllers/productCtrl')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) 

const cors = require('cors')
app.use(cors())

const configureRoutes = require('./controllers')
configureRoutes(app);

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, EMAIL, PASSWORD } = process.env

massive({
    connectionString: CONNECTION_STRING, 
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log('cannot connect to db', err))

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie : {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))


app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/current', authCtrl.getUser)


app.get('/api/products', productCtrl.getProducts)
app.post('/api/products', productCtrl.createProduct)
app.delete('/api/products/:id', productCtrl.deleteProduct)
app.put('/api/products/:id', productCtrl.updateNote)

app.post('/api/requests', requestCtrl.createRequest)
app.get('/api/requests', requestCtrl.getRequests)


//contact form
app.get('/', (req, res) => {
    res.send('Welcome to my api');
  })
  
  app.post('/api/v1', (req,res) => {
    var data = req.body;
  
  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });
  
  var mailOptions = {
    from: data.email,
    to: 'EMAIL',
    subject: 'Complaints',
    html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.subject}</p>
            <p>${data.message}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });
  
  })



app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))

