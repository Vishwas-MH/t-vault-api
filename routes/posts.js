const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }
})


router.post('/', async (req, res) => {
    const post = new Post({
        SafeName: req.body.SafeName,
        Owner: req.body.Owner,
        Type: req.body.Type,
        Desc: req.body.Desc,
        // folder: req.body.folder,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }

});

router.patch("/:postId", async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId },
            {
                $set: {
                    SafeName: req.body.SafeName,
                    Owner: req.body.Owner,
                    Type: req.body.Type,
                    Desc: req.body.Desc,
                }
            },
            { new: true }
        );

        res.send(updatePost);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }
});

router.delete("/:postId", async (req, res) => {
    try {
        const deletePost = await Post.deleteOne({ _id: req.params.postId });
        res.json(deletePost);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }
});

router.put("/folder/:postId", async (req, res) => {
    try {
        const addFolder = await Post.updateOne({ _id: req.params.postId },
            {
                $push: { folder: req.body.folder },
            },
            { new: true }
        );

        res.send(addFolder);
    }
    catch (err) {
        res.json({ message: err });
        console.log(err);
    }
});

module.exports = router;