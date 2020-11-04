import express from 'express';
import mailerRoutes from './mailerRoutes.js';
import blogRoutes from './blogRoutes.js';

const app = express()

app.use('/send', mailerRoutes)
app.use('/blog', blogRoutes)

export default app;