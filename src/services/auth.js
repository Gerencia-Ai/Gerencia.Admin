
class AuthService {
  async login(user) {
    const response = await api.post('https://gerencia-back-dev-thtb.2.ie-1.fl0.io/token/', user)
    return response.data
  }
}

export default new AuthService()