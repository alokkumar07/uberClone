const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();


const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
var cookieParser = require('cookie-parser')
connectToDb()

const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser())
app.get('/', (req, res) =>{
     res.send("hello world!");
})

app.use('/users',userRoutes)

app.use('/captain', captainRoutes)


module.exports = app;