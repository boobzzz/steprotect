import mongoose from 'mongoose';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect('mongodb://localhost:27017/blog', options)
