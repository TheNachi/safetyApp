import express from 'express';
import Roles from '../controllers/roles';

const role = express.Router();

role.route('/roles')
    .post(Roles.create)
    .get(Roles.list);

role.route('/roles/:id')
    .get(Roles.retrieve)
    .put(Roles.update)
    .delete(Roles.destroy);

export default role;