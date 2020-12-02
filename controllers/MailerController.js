import { transporter } from '../config/transporter.js';

const sendMail = (mail, res, context) => {
    transporter.sendMail(mail, (err) => {
        err
        ? res.json({ message: `${context} не вдалося надіслати, спробуте ще раз`})
        : res.json({ message: `${context} успішно надіслано` })
    })
}

export const sendNewCall = (req, res) => {
    let phone = req.body.phone
    let content = `
        <h2>Замовлено новий дзвінок за номером:</h2>
        <ul>
            <li><h3>${phone}</h3></li>
        </ul>
    `
    let mail = {
        from: 'SteProtect web app',
        to: 'steprotect.ua@gmail.com',
        subject: 'Новий дзвінок!!!',
        html: content
    }

    sendMail(mail, res, 'Дзвінок')
}

export const sendNewOrder = (req, res) => {
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
        to: 'steprotect.ua@gmail.com',
        subject: 'Нове замовлення!!!',
        html: content
    }

    sendMail(mail, res, 'Замовлення')
}
