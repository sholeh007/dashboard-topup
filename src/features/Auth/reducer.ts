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
  const handlers: any = {
    [USER_LOGIN]: () => ({ user: action.user, token: action.token }),
    [USER_LOGOUT]: () => ({ user: null, token: null }),
  };

  const handle = handlers[action.type];
  if (!handle) return state;

  return handle();
}
