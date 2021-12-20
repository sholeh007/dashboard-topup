import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function login(user: string, token: string) {
  return {
    type: USER_LOGIN,
    user,
    token,
  };
}

export function logout() {
  return {
    type: USER_LOGOUT,
  };
}
