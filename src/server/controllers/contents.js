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
        db.Content.findById(req.params.id)
            .then((content) => {
                if (!content) {
                    return res.status(404)
                        .send({ message: `Content with id ${req.params.id} not found`})
                }
                res.send(content)
            })
    },

    retrieveType(req, res) {
        db.Content.findById(req.params.type)
            .then((content) => {
                if (!content) {
                    return res.status(404)
                        .send({ message: `Contents of type ${req.params.type} not found`})
                }
                res.send(content)
            })
    },

    update(req, res) {
        db.Content.findById(req,params.id)
            .then((content) => {
                if (!content) {
                    return res.status(404)
                        .send({ message: `Content with id ${req.params.id} not found`});
                }
                content.update(req.body)
                    .then((updatedContent) => {
                        res.send(updatedContent);
                    });
            });
    },

    destroy(req, res) {
        db.Content.findById(req.params.id)
            .then((content) => {
                if (!content) {
                    return res.status(404)
                        .send({ message: `Content with id ${req.params.id} not found` })
                }
                content.destroy()
                    .then(() => res.send({ message: 'User deleted successfully.' }))
            })
    },

    search(req, res) {
        const query = {
            where: {
                $or: [{
                    type: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    topic: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    content: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    roleId: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    userId: {
                        $iLike: `%${req.query.q}%`
                    }
                }]
            },
            limit: req.query.limit || 10,
            offset: req.query.offset || 0,
            order: [['createdAt', 'DESC']]
        };
        db.Content.findAndCountAll(query)
            .then((content) => {
                res.status(200)
                    .send(content)
            })
    }


}