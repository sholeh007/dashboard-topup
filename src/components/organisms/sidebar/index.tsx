import ctx from "classnames";
import upperFirst from "../../../../lib/first-char-upper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Master, Pembanyaran } from "./list-menu";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const styleNav = ctx({
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion": true,
    toggled: toggle,
  });

  function handleMenu() {
    setToggle(!toggle);
  }

  return (
    <ul className={styleNav} id="accordionSidebar">
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-store"></i>
        </div>
        <div className="sidebar-brand-text mx-3">StoreUp</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Master</div>
      {Master.map((item, i) => (
        <li className="nav-item" key={i}>
          <Link className="nav-link" to={`/${item.link}`}>
            <i className={`fas ${item.icon}`}></i>
            <span>{upperFirst(item.title)}</span>
          </Link>
        </li>
      ))}

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Pembanyaran</div>
      {Pembanyaran.map((item, i) => (
        <li className="nav-item" key={i}>
          <Link className="nav-link" to={`/${item.link}`}>
            <i className={`fas ${item.icon}`}></i>
            <span>{upperFirst(item.title)}</span>
          </Link>
        </li>
      ))}

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Transaction</div>
      <li className="nav-item">
        <Link className="nav-link" to="/transaksi">
          <i className="fas fa-shopping-cart"></i>
          <span>Transaction</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleMenu}
        ></button>
      </div>
    </ul>
  );
}
