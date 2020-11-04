import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import favicon from 'serve-favicon';
import 'dotenv/config.js';

import indexRoute from './routes/index.js';
import './config/database.js';

const app = express();

// ES6 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// CORS middleware
app.use(cors())
// Request parser middleware
app.use(express.json())

// routes
app.use('/', indexRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Favicon middleware
app.use(favicon(path.join(__dirname, 'client', 'public', 'favicon.ico')))

const PORT = process.env.NODE_ENV === 'production'
             ? process.env.PROD_PORT
             : process.env.DEV_PORT
app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`))
