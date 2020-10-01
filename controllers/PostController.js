import PostModel from '../models/Post.js';

export const indexPost = (req, res) => {
    PostModel.find().then((err, posts) => {
        if (err) return res.send(err)

        res.json(posts)
    })
}

export const createPost = (req, res) => {
    const data = req.body

    const post = new PostModel({
        img: data.img,
        title: data.title,
        text: data.text
    })

    post.save().then(() => {
        res.send({ status: 'success' })
    }).catch((err) => {
        res.send(err)
    })
}

export const readPost = (req, res) => {
    PostModel.findOne({
        _id: req.params.id
    }).then(post => {
        !post
        ? res.send({ status: 'not found' })
        : res.json(post)
    })
}

export const updatePost = (req, res) => {
    PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, err => {
        if (err) return res.send(err)

        res.json({ status: 'success' })
    })
}

export const deletePost = (req, res) => {
    PostModel.deleteOne({
        _id: req.params.id
    }).then(post => {
        post
        ? res.json(req.params.id)
        : res.json({ status: 'failed to delete' })
    })
}