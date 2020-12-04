import { Post } from '../models/Post.js';
import { ErrorX } from '../helpers/error.js';

export const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (e) {
        next(new ErrorX(500, 'Внутрішня помилка сервера, будь ласка спробуйте пізніше'))
    }
}

export const createPost = async (req, res, next) => {
    const {img, title, text} = req.body

    const post = new Post({
        img: img,
        title: title,
        text: text
    })

    try {
        const newPost = await post.save()

        !newPost
        ? next(new ErrorX(500, 'Не вдалося додати новий пост, будь ласка спробуйте пізніше'))
        : res.json({ message: 'Новий пост успішно додано' })
    } catch (e) {
        next(e)
    }
}

export const readPost = async (req, res, next) => {
    try {
        await Post.findById(req.params.id).exec((err, post) => {
            !post
            ? next(new ErrorX(400, `Пост з id: ${req.params.id} не знайдено`))
            : res.json(post)
        })
    } catch (e) {
        next(e)        
    }
}

export const updatePost = async (req, res, next) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
            err
            ? next(new ErrorX(500, `Не вдалося внести зміни, будь ласка спробуйте пізніше`))
            : res.json({ message: 'Пост було успішно змінено' })
        })
    } catch (e) {
        next(e)
    }
}

export const deletePost = async (req, res, next) => {
    try {
        await Post.deleteOne({ _id: req.params.id }, (err, post) => {
            err
            ? next(new ErrorX(500, `Пост з id: ${req.params.id} не вдалося видалити, будь ласка спробуйте пізніше`))
            : res.json(req.params.id)
        })
    } catch (e) {
        next(e)        
    }
}
