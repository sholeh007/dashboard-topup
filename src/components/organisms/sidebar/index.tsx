import TransformChar from "../../../../lib/first-char-upper";
import { Fragment } from "react";
import { listMaster, listMetodePembanyaran } from "./list-sidebar";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const master = listMaster();
  const metode = listMetodePembanyaran();

  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Beranda</div>
            <Link className="nav-link active" to="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Master</div>
            {master.map((item, i) => (
              <Link className="nav-link" to={`/${item.link}`} key={i}>
                <div className="sb-nav-link-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                {TransformChar(item.title)}
              </Link>
            ))}
            <div className="sb-sidenav-menu-heading">Metode Pembanyaran</div>
            {metode.map((item, i) => (
              <Fragment key={i}>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  {TransformChar(item.title)}
                </a>
              </Fragment>
            ))}
            <div className="sb-sidenav-menu-heading">Transaksi</div>
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              Transaksi
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
