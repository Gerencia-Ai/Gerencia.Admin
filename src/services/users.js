import api from '../plugins/api'

class UserService {
  async getAllUsers() {
    const response = await api.get('/usuarios/')
    return response.data
  }
}

export default new UserService()