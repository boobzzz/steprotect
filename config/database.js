import mongoose from 'mongoose';
import 'dotenv/config.js';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_URI, options)

mongoose.connection.on('connected', () => {
    console.log('Mongo database connected...')
})