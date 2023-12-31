import React, { useState } from "react";
import Bell from "../assets/bell-icon.svg";
import Msg from "../assets/msg-icon.svg";
import Profile from "../assets/profile-img.svg";
import SideClose from "../assets/icons/left-arrow.svg";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../redux/actions";
import logopath from "../assets/logo-blue.svg";

function Layout({ children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const open = useSelector((state) => {
    return state.setting.toggle;
  });

  function toggleDrawer() {
    dispatch(changeToggle(!open));
    // setOpen(!open)
  }
  // console.log(open);
  // console.log(show);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={
            (!open ? " col-xl-2" : " w-100px") +
            (!show ? " mobile-navbar-hide " : " mobile-show ") +
            " col-auto col-md-1 px-0 side-bg-color border-right min-vh-100 trans"
          }
        >
          <div className="row">
            <div className="col">
              {/*<img src={logopath} className={open ? "hide-logo" : "logo-prm"} />*/}
            </div>
            <div className="col">
              <div
                className={"close-btn-container mobile-hide"}
                onClick={toggleDrawer}
              >
                <img
                  src={SideClose}
                  alt="SideClose"
                  className={!!open && "rotate-180"}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 nav-link-text-color pt-4">
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active "
                    : "side-menu-item "
                }
                to={"/home"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="briefcase"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={"trans-1"}>Projects</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/tasks"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="file-text"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Tasks</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/calendar"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="calendar"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Calendar</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/member"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="users"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Member </div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/settings"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="settings"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Settings</div>}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/logout"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="log-out"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Logout</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 border-bottom-d1d1d1 mb-3"} />
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/msg"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="settings"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Navaneethan</div>}
                </div>
              </NavLink>
            </div>

            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/msg"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="settings"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Hasan</div>}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/msg"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="settings"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Hasan</div>}
                </div>
              </NavLink>
            </div>
            <div className={"w-100 px-sm-2"}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-menu-item side-menu-active"
                    : "side-menu-item"
                }
                to={"/msg"}
              >
                <div className={"d-flex"}>
                  <FeatherIcon
                    icon="settings"
                    className={!open ? "me-2" : "ms-1"}
                  />
                  {!open && <div className={""}>Hasan</div>}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4">
            <div className="container-fluid nav-iconset flex-nowrap">
              <button
                className="navbar-toggler "
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="">
                <ul className="navbar-nav ms-auto align-items-center flex-row">
                  <li className="nav-item">
                    <a
                      className="nav-link active position-relative px-2"
                      aria-current="page"
                      href="#"
                    >
                      <div className="red-dot" />
                      <img src={Bell} alt="" />
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      className="nav-link  position-relative"
                      aria-current="page"
                      href="#"
                    >
                      <img src={Msg} alt="" />
                    </a>
                  </li>
                  <div> nava</div>
                  <li className="nav-item px-2">
                    <a
                      className="nav-link  position-relative p-0"
                      aria-current="page"
                      href="#"
                    >
                      <img src={Profile} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div
              className={
                show ? "nav-shadow opacity-100" : "invisible opacity-0"
              }
              onClick={() => setShow(!show)}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
