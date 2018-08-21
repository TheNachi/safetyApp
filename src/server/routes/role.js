import express from 'express';
import Roles from '../controllers/roles';
import auth from '../middlewares/auth'


const role = express.Router();

role.route('/roles')
    .post(auth.verifyToken, auth.permitAdmin, Roles.create)
    .get(auth.verifyToken, auth.permitAdmin, Roles.list);

role.route('/roles/:id')
    .get(auth.verifyToken, auth.permitAdmin, Roles.retrieve)
    .put(auth.verifyToken, auth.permitAdmin, Roles.update)
    .delete(auth.verifyToken, auth.permitAdmin, Roles.destroy);

export default role;