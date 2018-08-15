import db from '../models';

export default {

    create(req, res) {
        db.Location.create(req.body)
            .then((location) => {
                res.status(201).send(location)
            })
            .catch((err) => {
                res.status(400).send(err.errors)
            })
    },

    list(req, res) {
        db.Location.findAll()
            .then((location) => {
                res.send(location)
            })
    },

    retrieve(req, res) {
        db.Location.findById(req.params.locationName)
            .then((location) => {
                if (!location) {
                    return res.status(404)
                        .send({ message: `Location with name ${req.params.id} not found`})
                }
                res.send(location);
            })
    },

    update(req, res) {
        db.Location.findById(req.params.id)
            .then((location) => {
                if (!location) {
                    return res.status(404)
                        .send({ message: `Location with id ${req.params.id} not found` })
                }
                location.update(req.body)
                    .then((updatedLocation) => {
                        res.send(updatedLocation);
                    });
            });
    },

    destroy(req, res) {
        db.Location.findById(req.params.id)
            .then((location) => {
                if (!location) {
                    return res.status(404)
                        .send({ message: `Location with id ${req.params.id} not found` })
                }
                location.destroy()
                    .then(() => res.send({ message: 'Location deleted successfully.' }))
            })
    },
}