import mongoose from 'mongoose';

const { Schema } = mongoose

const AdminSchema = new Schema(
    {
        username: String,
        password: String
    }
)

export const Admin = mongoose.model('Admin', AdminSchema);