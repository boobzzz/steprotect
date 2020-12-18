import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

import { Admin } from '../models/Admin.js';
import { ErrorX } from '../helpers/error.js';

export const adminLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body
        
        const admin = await Admin.findOne({ username })
        if (!admin) throw new ErrorX(400, 'Невірний логін або пароль')

        const isPWMatch = await bcrypt.compare(password, admin.password)
        if (!isPWMatch) throw new ErrorX(400, 'Невірний логін або пароль')

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.json({ token, id: admin.id })
    } catch (e) {
        next(e)
    }
}

export const adminUpdate = async (req, res, next) => {
    try {
        const { username, password } = req.body
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const set = {
            username: username,
            password: hashedPassword
        }
        await Admin.findOneAndUpdate({}, { $set: set }, (err) => {
            err
            ? next(new ErrorX(500, `Не вдалося внести зміни, будь ласка спробуйте пізніше`))
            : res.json({ message: 'Дані було успішно змінено' })
        })
    } catch (e) {
        next(e)
    }
}