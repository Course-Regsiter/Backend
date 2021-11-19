const jwt = require('../modules/jwt');
const User = require('../models/user');

const authMiddleware = async (ctx, next) => {
  // Header로 access_token을 전달받음
  const accessToken = ctx.get('Authorization')?.split('Bearer ')[1];
 
  if (accessToken && accessToken !== 'undefined' && accessToken !== 'null') {
      try {
        const decoded = await jwt.verify(accessToken);
        ctx.state.user = {
          _id: decoded._id,
          userid: decoded.userid,
        };

        // 3.5일 미만 재발급
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
          const user = await User.findById(decoded._id);
          const token = user.generateToken();
          ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7
          });
        }
        next();
      } catch (e) {
        ctx.status = 401;
      }
  }else {
      console.log('no tokens');
      ctx.state.user = null;
      next();
  }

};

module.exports = authMiddleware;
