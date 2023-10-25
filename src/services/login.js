import axios from "axios";
export default class LoginApi {
  async Login(user) {
    const response = await axios.post("https://gerencia-back-dev-thtb.2.ie-1.fl0.io/token/", user);
    return response.data
  }
}