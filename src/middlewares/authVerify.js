const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function (req,res,next) {

const token = req.header("auth-token")

if(!token) {
    res.status(401).send("Access denied")
}

try {
    const verified = jwt.verify(token , process.env.TOKEN_SECRET)
     req.user = verified;
     next();

} catch (error) {
    res.status(400).send("Invalid token")
}

}