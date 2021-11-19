const User = require('../../models/user');

// 로그인 상태 확인
exports.check = async(ctx) => {
  const { user } = ctx.state;

  if (!user) {
    ctx.status=401;
    return;
  }else {
    ctx.body = user;
  }
};
