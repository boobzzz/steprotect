import mongoose from 'mongoose';

const { Schema } = mongoose

const PostSchema = new Schema(
    {
        img: String,
        title: String,
        text: String
    }
)

const Post = mongoose.model('Post', PostSchema)

export default Post;
