import nodemailer from 'nodemailer';
import google_pkg from 'googleapis';
import 'dotenv/config.js';

const { google } = google_pkg

const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
     process.env.CLIENT_ID,
     process.env.CLIENT_SECRET,
     process.env.REDIRECT_URL
)

oauth2Client.setCredentials({
     refresh_token: process.env.REFRESH_TOKEN
})
const accessToken = oauth2Client.getAccessToken()

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
})

transporter.verify((err, success) => {
    err
    ? console.log('Error with the connection...')
    : console.log('Server is ready to take messages...')
})