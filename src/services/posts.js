import api from '../plugins/api'

class PostService {
  async getAllPosts() {
    const response = await api.get('/posts/')
    return response.data
  }
  async savePost(post) {
    let response
    if (post.id) {
      response = await api.put(`/posts/${post.id}/`, post)
    } else {
      response = await api.post('/posts/', post)
    }
    return response.data
  }
  async deletePost(post) {
    const response = await api.delete(`/posts/${post.id}/`)
    return response.data
  }
}

export default new PostService()