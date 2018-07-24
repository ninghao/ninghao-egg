'use strict';

module.exports = options => {
  return async function demo(ctx, next) {
    console.log('options: ', options);
    console.log('ctx: ', ctx);
    await next();
  }
}
