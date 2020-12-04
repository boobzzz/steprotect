import express from 'express';
import MailerRoutes from './MailerRoutes.js';
import BlogRoutes from './BlogRoutes.js';
import AuthRoutes from './AuthRoutes.js';

const app = express()

app.use('/send', MailerRoutes)
app.use('/blog', BlogRoutes)
app.use('/admin', AuthRoutes)

export default app;