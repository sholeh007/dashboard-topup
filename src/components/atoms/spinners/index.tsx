import ctx from "classnames";

interface propTypes {
  color: "primary" | "danger" | "success";
  size: "sm" | "lg";
}

export default function Spinner({ color, size }: propTypes) {
  const styleSpinner = ctx({
    "spinner-border": true,
    [`text-${color}`]: ["primary", "danger", "success"].includes(color),
    [`spinner-border-${size}`]: ["sm", "lg"].includes(size),
  });
  return <span className={styleSpinner} role="status"></span>;
}
