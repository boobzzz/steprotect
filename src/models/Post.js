import mongoose from 'mongoose';

const { Schema } = mongoose

const PostSchema = new Schema(
    {
        img: String,
        title: String,
        text: String
    }
)

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel;
