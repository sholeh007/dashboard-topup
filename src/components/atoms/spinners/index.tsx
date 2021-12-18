import ctx from "classnames";

interface propTypes {
  color?: "primary" | "danger" | "success" | undefined;
  size: "sm" | "lg";
}

export default function Spinner({ color, size }: propTypes) {
  const styleSpinner = ctx({
    "spinner-border": true,
    [`text-${color}`]: color
      ? ["primary", "danger", "success"].includes(color)
      : color,
    [`spinner-border-${size}`]: ["sm", "lg"].includes(size),
  });
  return (
    <span className={styleSpinner} role="status" aria-hidden={true}></span>
  );
}
