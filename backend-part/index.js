import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js"
import jwt from "jsonwebtoken";
import authRoutes from "./routes/auth.js";
import chatRoutes from "./routes/chat.js";


const app=express();
app.use(express.json());
app.use('/api', authRoutes);




app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send({message: 'user created successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/login', async (req , res)=> {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user || !(await user.findOne({password: req.body.password}))){
            return res.send('Invalid credentials');
        }
        const token = jwt.sign({id:user._id}, 'your_jwt_secret', {expiresIn: '1hr'});
        res.send({token});
    } catch (error) {
     res.status(500).send(error);
    }
})

app.post('/chat', async(req, res)=> {

})



mongoose.connect(process.env.MONGO_URI,{})
.then(console.log("Mongo db running"))
.catch(err => console.log(`Error in mongodb: ${err}`))

app.listen(PORT, ()=> {
console.log(`App is listening on port ${PORT}`);
});

