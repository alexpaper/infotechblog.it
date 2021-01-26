//*** Requirment
const dotenv = require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cat = require('cat-me');
const path = require("path");
const cookieParser = require('cookie-parser');
// AUTHENTICATION 
const User = require('./models/user');
//*** SECURITY PACKAGES */
const mongooseSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const expressRateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require("cors");

//*** MONGO DB CONNECTION
const connectDB = require("./config/db");
connectDB();

//*** APP
const app = express();
//*** NODEJS SECURITY */
app.use(mongooseSanitize());
app.use(helmet());
app.use(xssClean());
app.use(hpp());
const limiter = expressRateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 10000 // 100 requests for 10 mins
});
app.use(limiter);
//Cors
app.use(cors());

//*** AUTHENTICATION */
// Cookie parser
app.use(cookieParser());

//*** MIDDLEWARES */
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// STATIC
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
let index = require("./routes/index");
let users = require('./routes/users');

app.use('/user', users);
app.use("/", index);

// React front end
if(process.env.NODE_ENVIRONMENT === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
}


// 404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(500).json({ error: 'Server error.' })
});

//==================== ERROR HANDLER MIDDLEWARE
//=== IMPORTANT: use this AFTHER THE ROUTE YOU WANT TO USE 

//*** PORT
let PORT = process.env.PORT;
// Listener
const server = app.listen(PORT, () => {
    console.log(`${cat()}`);
    console.log(`Server running 🏃💨 in ${process.env.NODE_ENVIRONMENT} environment on port ${PORT}`.blue);
});