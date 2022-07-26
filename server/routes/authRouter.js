const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/authController');
const { validateField } = require('../middlewares/validateField');

const authRoutes = Router();

authRoutes.post('/login', [
  check('email', 'Email is required').isEmail(),
  check('email', 'Email is required').not().isEmpty(),
  check('password', 'Must enter a password').not().isEmpty(),
  validateField
], login);

authRoutes.post('/google', [
  validateField
], /* sign with google */);


module.exports = {
  authRoutes
};