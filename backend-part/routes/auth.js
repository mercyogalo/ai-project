import express from "express";
const router=express.Router();
import User from "./models/User.js";
import jwt from "jsonwebtoken";



exports.router.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send({message: 'user created successfully'});
    } catch (error) {
        res.status(400).send(error);
    }
})

exports.router.post('/login', async (req , res)=> {
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

