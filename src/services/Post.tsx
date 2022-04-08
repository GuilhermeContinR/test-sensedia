import api from './api';

export default class Posts {
  static getPost() {
    return api.get('posts');
  }
}
