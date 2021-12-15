import ctx from "classnames";

export default function Button(props: any) {
  const { children, type, disabled, id, btncolor, size } = props;
  const styleBtn = ctx("btn", `btn-${btncolor}`, {
    [`btn-${size}`]: size === "sm" || size === "lg",
  });

  return (
    <button
      className={styleBtn}
      id={id}
      type={type}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
