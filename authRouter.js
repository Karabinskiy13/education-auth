/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');

router.post(
  '/registration',
  [
    check('username', 'not empty').notEmpty(),
    check('password', 'password from 4 to 10').isLength({ min: 4, max: 10 })
  ],
  controller.registration
);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;
