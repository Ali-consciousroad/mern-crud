const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

// generate token and send to client/react if the password is right
// otherwise send an error message
exports.login = (req, res) => {
    const {name, password} = req.body
    if(password === process.env.PASSWORD){
        const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return res.json({token, name})
    } else {
        return res.status(400).json({
            error: 'Incorrect password!'
        })
    }
}