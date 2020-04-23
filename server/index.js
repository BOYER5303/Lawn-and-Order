const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
require('dotenv').config()

const {login, register, logout, getUser} = require('./controllers/authCtrl')
const productCtrl = require('./controllers/productCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

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


app.post('/auth/register', register)
app.post('/auth/login', login)
app.delete('/auth/logout', logout)
app.get('/auth/current', getUser)


app.get('/api/products', productCtrl.getProducts)
app.post('/api/products', productCtrl.createProduct)
app.delete('/api/products/:id', productCtrl.deleteProduct)



app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))