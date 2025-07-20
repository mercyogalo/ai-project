import jwt from "jsonwebtoken";


const auth = (req, res, next)=>{
    const token = req.header('Authorization').replace('Bearer: ','');
    try {
        const decoded=jwt.verify(token, 'jwt_your_secret');
        req.userId=decoded.id;
        next();
    } catch (error) {
        res.status(404).send({error:'Please authenticate'})
        
    }
}

exports.auth;