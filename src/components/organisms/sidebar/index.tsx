import TransformChar from "../../../../lib/first-char-upper";
import { Fragment } from "react";
import { listMaster, listMetodePembanyaran } from "./list-sidebar";

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
            <a className="nav-link active" href="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </a>
            <div className="sb-sidenav-menu-heading">Master</div>
            {master.map((item, i) => (
              <Fragment key={i}>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  {TransformChar(item.title)}
                </a>
              </Fragment>
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
