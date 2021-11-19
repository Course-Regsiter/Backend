const Router = require('koa-router');
const { register, login, logout } = require('./user.ctrl');

const router = new Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
