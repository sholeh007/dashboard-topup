import { SET_PAGE, NEXT_PAGE, PREV_PAGE } from "./constant";

const initialState = {
  currentPage: 1,
  totalItems: -1,
  perPage: 10,
};

export default function reducer(state = initialState, action: any) {
  const handlers: any = {
    [SET_PAGE]: () => ({ ...state, currentPage: action.currentPage }),
    [NEXT_PAGE]: () => ({ ...state, currentPage: state.currentPage + 1 }),
    [PREV_PAGE]: () => ({ ...state, currentPage: state.currentPage - 1 }),
  };

  const handler = handlers[action.type];

  if (!handler) return state;

  return handler();
}
