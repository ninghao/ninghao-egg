'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async greet() {
    // this.ctx.body = 'hello ~';
    await this.ctx.render('demo.njk');
  }

  async posts() {
    const posts = await this.ctx.service.demo.listPost();
    // this.ctx.body = posts;
    await this.ctx.render('posts/index.njk', { posts });
  }
}

module.exports = DemoController;
