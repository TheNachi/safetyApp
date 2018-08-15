import db from '../models/';

export default {

    create(req, res) {
        db.Incident.create(req.body)
            .then((location) => {
                res.status(201).send(location)
            })
            .catch((err) => {
                res.status(400).send(err.errors)
            })
    },

    list(req, res) {
        db.Incident.findAll()
            .then((location) => {
                res.send(location);
            })
    },

    retrieve(req, res) {
        db.Incident.findById(req.params.id)
            .then((incident) => {
                if (!incident) {
                    return res.status(404)
                        .send({ message: `Incident with id ${req.params.id} not found`})
                }
                res.send(incident);
            })
    },

    update(req, res) {
        db.Incident.findById(req.params.id)
            .then((incident) => {
                if (!incident) {
                    return res.status(404)
                        .send({ message: `Incident with id ${req.params.id} not found` })
                }
                incident.update(req.body)
                    .then((updatedIncident) => {
                        res.send(updatedIncident);
                    });
            });
    },

    destroy(req, res) {
        db.Incident.findById(req.params.id)
            .then((incident) => {
                if (!incident) {
                    return res.status(404)
                        .send({ message: `Incident with id ${req.params.id} not found` })
                }
                incident.destroy()
                    .then(() => res.send({ message: 'Incident deleted successfully.' }))
            })
    },


    search(req, res) {
        const query = {
            where: {
                $or: [{
                    name: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    locationId: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    status: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    ownerId: {
                        $iLike: `%${req.query.q}%`
                    }
                }]
            },
            limit: req.query.limit || 10,
            offset: req.query.offset || 0,
            order: [['createdAt', 'DESC']]
        };
        db.Incident.findAndCountAll(query)
            .then((incident) => {
                res.status(200)
                    .send(incident)
            })
    }
}