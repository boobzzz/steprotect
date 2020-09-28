import express from 'express';
import path from 'path';
import cors from 'cors';

import * as MC from './controllers/MailController';
import * as PC from './controllers/PostController';
import './config/database';
// import routes from './controllers/routes';

const app = express();

app.use(cors())

app.use(express.json())

// app.use('./controllers/routes', routes)

// Mailer routes
app.post('/call', MC.sendNewCall)
app.post('/order', MC.sendNewOrder)

// Blog routes
app.get('/posts', PC.indexPost)
app.post('/posts', PC.createPost)
app.get('/posts/:id', PC.readPost)
app.put('/posts/:id', PC.updatePost)
app.delete('/posts/:id', PC.deletePost)

// Set static folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT} port`))
