import mongoose from 'mongoose';
import config from 'config';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

// mongoose.connect('mongodb://localhost:27017/blog', options)
mongoose.connect(config.get('mongoUri'), options)


mongoose.connection.on('connected', () => {
    console.log('Mongo database connected...')
})
