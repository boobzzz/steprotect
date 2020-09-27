import express from 'express';
import path from 'path';
import cors from 'cors';

import * as MC from './controllers/MailController';
import * as PC from './controllers/PostController';
import './config/database';

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())

//-------------------------------Mailer routes----------------------------------
app.post('/call', MC.sendNewCall)
app.post('/order', MC.sendNewOrder)

//--------------------------------Blog routes-----------------------------------
app.get('/posts', PC.indexPost)
app.post('/posts', PC.createPost)
app.get('/posts/:id', PC.readPost)
app.put('/posts/:id', PC.updatePost)
app.delete('/posts/:id', PC.deletePost)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT} port`))
