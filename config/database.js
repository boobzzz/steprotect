import mongoose from 'mongoose';
// import config from 'config';
import 'dotenv/config.js';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

// mongoose.connect('mongodb://localhost:27017/blog', options)
// mongoose.connect(config.get('mongoUri'), options)
mongoose.connect(process.env.DB_URI, options)

mongoose.connection.on('connected', () => {
    console.log('Mongo database connected...')
})
