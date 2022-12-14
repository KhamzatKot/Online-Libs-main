const Reviev = require('../models/Reviev.model')

module.exports.revievController = {
    postReviev: (req, res) => {
        Reviev.create({
            revievAuthor: req.body.revievAuthor,
            text: req.body.text,
            book: req.body.book
        }).then((data) => {
            res.json(data)
        })
    },
    deleteReviev: (req, res) => {
        Reviev.findByIdAndDelete(req.params.id).then(() => {
            res.json("Reviev deleted Succes")
        })
    },
    patchReviev: (req, res) => {
        Reviev.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true }).then((data) => {
            res.json(data)
        })
    },
    getRevievById: (req, res) => {
        Reviev.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getAllRevievs: (req, res) => {
        Reviev.find().then((data) => {
            res.json(data)
        })
    }
}