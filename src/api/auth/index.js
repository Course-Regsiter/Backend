const Router = require('koa-router');
const { register, login, check, logout } = require('./auth.ctrl');
const authMiddleware = require('../../middleware/authMiddleware');

const auth = new Router();

auth.get('/check', authMiddleware, check);

module.exports = auth;
