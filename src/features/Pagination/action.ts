import { NEXT_PAGE, PREV_PAGE, SET_PAGE } from "./constant";

export function setPage(currentPage = 1) {
  return {
    type: SET_PAGE,
    currentPage,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}
