require('dotenv').config()
require('express-async-errors')

const express = require('express')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const mainRouter = require('./routes/main')
// const connectDB = require('./db/connect')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        })
    }
    catch (error) {
        console.log(error);
    }
}

start()