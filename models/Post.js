import mongoose from 'mongoose';

const { Schema } = mongoose

const PostSchema = new Schema(
    {
        img: String,
        title: String,
        text: String
    }
)

export const Post = mongoose.model('Post', PostSchema);