import mongoose from 'mongoose';
import 'dotenv/config.js';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

// mongoose.connect('mongodb://localhost:27017/blog', options)
mongoose.connect('mongodb+srv://boooble:aid261282@clustersteprotect.nobjr.mongodb.net/blog?retryWrites=true&w=majority', options)

mongoose.connection.on('connected', () => {
    console.log('Mongo database connected...')
})
