const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParse= require("body-parse");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(bodyParse.json());


const PORT = process.env.PORT || 5000;


mongoose
.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log(err));



app.get('/', (req, res)=> {
    res.send("Server running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));