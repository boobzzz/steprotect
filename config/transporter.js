import nodemailer from 'nodemailer';
import 'dotenv/config.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iam618384@gmail.com',
        pass: 'iam261282'
    }
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    // auth: {
    //     type: 'OAuth2',
    //     clientId: 'chaqi.puerh@gmail.com',
    //     clientSecret: 'vebfbrjxzfyuxzam'
    // }
})

transporter.verify((err, success) => {
    err
    ? console.log('Error with the connection...')
    : console.log('Server is ready to take messages...')
})

export default transporter;
