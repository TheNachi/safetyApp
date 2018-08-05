import db from '../models';

export default {

    create(req, res) {
        db.Content.create(req.body)
            .then((content) => {
                res.status(201)
                    .send(content);
            })
            .catch((err) => {
                res.status(400)
                    .send(err.errors);
            })
    },

    list(req, res) {
        db.Content.findAll()
            .then((content) => {
                res.send(content)
            })
    },

    retrieve(req, res) {
        db.Content.findById
    }
}