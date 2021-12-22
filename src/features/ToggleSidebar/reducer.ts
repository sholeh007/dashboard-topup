import { toggled } from "./constant";

const initState = {
  isToggle: false,
};

export default function reducer(state = initState, action: any) {
  const handlers: any = {
    [toggled]: () => ({ isToggle: action.toggle }),
  };

  const handler = handlers[action.type];
  if (!handler) return state;

  return handler();
}
