'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async greet() {
    // this.ctx.body = 'hello ~';
    await this.ctx.render('demo.njk');
  }
}

module.exports = DemoController;
