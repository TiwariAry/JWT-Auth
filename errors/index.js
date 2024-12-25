// Better way to handle HTTP errors -> npm install http-status-codes --save

const CustomAPIError = require('./customError')
const BadRequest = require('./badRequest')
const Unauthenticated = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequest,
    Unauthenticated
}