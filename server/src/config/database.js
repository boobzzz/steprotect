import mongoose from 'mongoose';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

// mongoose.connect('mongodb://localhost:27017/blog', options)
mongoose.connect(process.env.DB_URI, options)

mongoose.connection.on('connected', () => {
    console.log('Mongo database connected...')
})