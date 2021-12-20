import { USER_LOGIN, USER_LOGOUT } from "./constants";

const initState = {
  user: null,
  token: null,
};

interface propType {
  type: string;
  user: string;
  token: string;
}

export default function reducer(state = initState, action: propType) {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.user, token: action.token };
    case USER_LOGOUT:
      return { user: null, token: null };
    default:
      return state;
  }
}
