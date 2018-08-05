import express from 'express';
import Users from '../controllers/users';

const user = express.Router();

user.route('/users')
    .post(Users.create)
    .get(Users.list);

user.route('/users/:id')
    .get(Users.retrieve)
    .put(Users.update)
    .delete(Users.destroy);

user.route('/users/login')
    .post(Users.login);

user.route('/users/search')
    .get(Users.search);

user.route('/users/logout')
    .post(Users.logout)

export default user;