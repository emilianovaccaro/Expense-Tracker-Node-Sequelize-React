const { Router } = require('express');
const { check } = require('express-validator');
const { postUser, deleteUser } = require('../controllers/userController');

const userRoutes = Router();


userRoutes.post('/', postUser );
userRoutes.delete('/:id', deleteUser );


module.exports = {
  userRoutes
};