import express from 'express';
import Roles from '../controllers/roles';

const role = express.Router();

role.route('/roles')
    .post(Roles.create);

export default role;