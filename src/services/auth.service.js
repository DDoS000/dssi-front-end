import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    return api
      .post("/auth/api/auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(username, fullname, email, password) {
    return api.post("/auth/api/auth/signup", {
      username,
      fullname,
      email,
      password
    });
  }
}

export default new AuthService();
