import express from 'express';
import MailerRoutes from './MailerRoutes.js';
import BlogRoutes from './BlogRoutes.js';

const app = express()

app.use('/send', MailerRoutes)
app.use('/blog', BlogRoutes)

export default app;