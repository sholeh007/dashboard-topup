import ctx from "classnames";
import MenuItem from "./menu-item";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Master, Pembanyaran } from "./list-menu";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../../../features/ToggleSidebar/action";

interface propsType {
  active: string;
}

export default function Sidebar({ active }: propsType) {
  const state: any = useSelector<any>((state) => state.toggled);
  const dispatch = useDispatch();

  const styleNav = ctx({
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion": true,
    toggled: state.isToggle,
  });

  function handleMenu() {
    dispatch(setToggle(!state.isToggle));
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
            title={item.title}
            active={active}
          />
        </Fragment>
      ))}

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Pembanyaran</div>
      {Pembanyaran.map((item, i) => (
        <Fragment key={i}>
          <MenuItem icon={item.icon} link={item.link} title={item.title} />
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
