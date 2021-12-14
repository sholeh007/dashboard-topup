import ctx from "classnames";
import upperFirst from "../../../../lib/first-char-upper";
import { Link } from "react-router-dom";

interface propTypes {
  active?: string;
  link: string;
  icon: string;
  title: string;
}

export default function MenuItem({ active, link, icon, title }: propTypes) {
  const styleMenu = ctx({
    "nav-item": true,
    active: active === link,
  });
  return (
    <li className={styleMenu}>
      <Link className="nav-link" to={link}>
        <i className={`fas ${icon}`}></i>
        <span>{upperFirst(title)}</span>
      </Link>
    </li>
  );
}
