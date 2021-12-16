import ctx from "classnames";
import { MouseEventHandler, ReactNode } from "react";

interface propsType {
  children: ReactNode;
  type: "button" | "submit";
  disabled?: boolean;
  btnColor: string;
  size?: string;
  onClick?: MouseEventHandler;
}

export default function Button(props: propsType) {
  const { children, type, disabled, btnColor, size, onClick } = props;
  const styleBtn = ctx("btn", `btn-${btnColor}`, {
    [`btn-${size}`]: size === "sm" || size === "lg",
  });

  return (
    <button
      className={styleBtn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
