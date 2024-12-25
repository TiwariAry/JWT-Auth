require('dotenv').config()

const {BadRequest} = require('../errors/index')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {username, password} = req.body;

    // Validation ways
    // 1. Mongoose Validation
    // 2. JOI
    // 3. Check in the controller (This is what we are doing right now)

    if (!username || !password) {
        throw new BadRequest('Please provide username and password');
    }

    // Normally we pass here the ID which is provided by the DB
    const id = new Date().getDate();
    // Try to keep the payload small for better performance
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({msg: "User created", token});
}

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Lucky number: ${luckyNumber}`
    });
}

module.exports = {
    login,
    dashboard
}