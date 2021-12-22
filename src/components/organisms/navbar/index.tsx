import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../../../features/ToggleSidebar/action";

export default function Navbar() {
  const state: any = useSelector<any>((state) => state.toggled);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(setToggle(!state.isToggle));
  }

  return (
    <nav
      className=" 
    navbar navbar-expand navbar-light
    bg-white
    topbar
    mb-4
    static-top
    shadow
  "
    >
      <button
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={handleToggle}
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            username
          </a>

          <div
            className="
          dropdown-menu dropdown-menu-right
          shadow
          animated--grow-in
        "
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
