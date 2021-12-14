import ctx from "classnames";
import MenuItem from "./menu-item";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Master, Pembanyaran } from "./list-menu";

interface propsType {
  active: string;
}

export default function Sidebar({ active }: propsType) {
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

      <MenuItem
        icon="fa-fw fa-tachometer-alt"
        title="Dashboard"
        link="/"
        active={active}
      />

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Master</div>
      {Master.map((item, i) => (
        <Fragment key={i}>
          <MenuItem
            icon={item.icon}
            link={item.link}
            title={item.link}
            active={active}
          />
        </Fragment>
      ))}

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Pembanyaran</div>
      {Pembanyaran.map((item, i) => (
        <Fragment key={i}>
          <MenuItem icon={item.icon} link={item.link} title={item.link} />
        </Fragment>
      ))}

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Transaction</div>
      <MenuItem link="/transaksi" icon="fa-shopping-cart" title="Transaction" />

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
