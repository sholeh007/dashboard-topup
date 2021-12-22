import { toggled } from "./constant";

export function setToggle(toggle: boolean) {
  return {
    type: toggled,
    toggle,
  };
}
