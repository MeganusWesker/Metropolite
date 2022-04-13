const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');

const errorMidddleware = require("./middlewares/error");


// setting up config file
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }

app.use(express.json({limit:"50mb"}));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.urlencoded({limit:"50mb",extended:true}))
//app.use(bodyParser.urlencoded({extended:true}))

// Importing all routes 
const products = require('./routes/products');
const user = require('./routes/auth');
const order = require('./routes/orders');
const payment = require("./routes/paymentRoute");



app.use('/api/v1',products);
app.use('/api/v1',user);
app.use('/api/v1',order);
app.use('/api/v1',payment);


// this setup is written to load pages on production level 
app.use(express.static(path.join(__dirname,"../frontend/build"))); // using build static  folder without doing this we will get error as we can't get data direclty from static folder  

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})
//middleware to handle errors
app.use(errorMidddleware);

module.exports = app;