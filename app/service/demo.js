'use strict';

const { Service } = require('egg');

class DemoService extends Service {
  async listPost() {
    const posts = await this.app.mysql.select('posts');
    return posts;
  }

  async getPost(id) {
    const post = await this.app.mysql.get('posts', { id });
    return post;
  }
}

module.exports = DemoService;
