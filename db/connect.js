const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => "Connected to Database")
        .error((error) => console.log(error));
}

module.exports = connectDB