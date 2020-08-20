const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iam618384@gmail.com',
        pass: 'iam261282'
    }
})

transporter.verify((err, success) => {
    err
    ? console.log('Error with the connection')
    : console.log('Server is ready to take messages!')
})

app.post('/call', (req, res) => {
    let phone = req.body.phone
    let content = `
        <h2>Замовлено новий дзвінок за номером:</h2>
        <ul>
            <li><h3>${phone}</h3></li>
        </ul>
    `
    let mail = {
        from: 'SteProtect web app',
        to: 'iam618384@gmail.com',
        subject: 'Новий дзвінок!!!',
        html: content
    }

    transporter.sendMail(mail, (err, data) => {
        err
        ? res.json({status: 'fail'})
        : res.json({status: 'success'})
    })
})

app.post('/order', (req, res) => {
    let order = req.body
    let content = `
        <h2>Сформовано нове замовлення:</h2>
        <ul>
            <li>Ім'я: <b>${order.name}</b></li>
            <li>Послуга: <b>${order.services}</b></li>
            <li>Номер телефону: <b>${order.phone}</b></li>
            <li>E-mail: <b>${order.email}</b></li>
        </ul>
    `
    let mail = {
        from: 'SteProtect web app',
        to: 'iam618384@gmail.com',
        subject: 'Нове замовлення!!!',
        html: content
    }

    transporter.sendMail(mail, (err, data) => {
        err
        ? res.json({status: 'fail'})
        : res.json({status: 'success'})
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT} port`))
