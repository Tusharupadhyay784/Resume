const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./Routes/userRouter');
const userRouter2 = require('./Routes/userRouter2')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
dotenv.config(); // for accessing env variables 
const PORT = process.env.PORT;
// setup the mongoose part
mongoose.connect('mongodb://localhost:27017').then((e) => console.log("MongoDB connected")).catch((e) => console.log("MongoDB Facing Issues"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());




//middlewares
app.use('/user', userRouter2);
app.use('/user', userRouter);


// server is running below
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
