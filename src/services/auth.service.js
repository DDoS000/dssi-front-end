import { instance_AUTH as api } from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    return api
      .post("/api/auth/signin", {
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

  createUser(user) {
    return api.post("/api/auth/create_muti_user", {
      user
    });
  }

  GetUser() {
    return api.get("/api/users")
  }

  GetUserFilter(filter) {
    return api.get("/api/users/filter", { params: { q: filter.q } })
  }

  GetUserById(id) {
    return api.get("/api/users/user", { params: { id: id } })
  }

  DeleteUser(id) {
    return api.delete("/api/users/delete", {
      data: {
        id: id
      }
    })
  }

  ChangePassword(id, old_password, new_password) {
    return api.post("/api/auth/changepassword", {
      id,
      old_password,
      new_password
    })
  }
}

export default new AuthService();