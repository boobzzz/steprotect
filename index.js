import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import favicon from 'serve-favicon';

import * as MC from './controllers/MailController.js';
import * as PC from './controllers/PostController.js';
import './config/database.js';

const app = express();

// ES6 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// CORS middleware
app.use(cors())
// Request parser middleware
app.use(express.json())

// Mailer routes
app.post('/call', MC.sendNewCall)
app.post('/order', MC.sendNewOrder)

// Blog routes
app.get('/posts', PC.indexPost)
app.post('/posts', PC.createPost)
app.get('/posts/:id', PC.readPost)
app.put('/posts/:id', PC.updatePost)
app.delete('/posts/:id', PC.deletePost)

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Favicon middleware
app.use(favicon(path.join(__dirname, 'client', 'public', 'favicon.ico')))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on port ${PORT} ...`))
