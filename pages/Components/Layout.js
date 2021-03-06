import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";

import Link from "next/link";
// import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Store } from "../../utils/Store";
import Cookies from "js-cookie";

import Footer from "./Footer";

export default function Layout({ title, children, description }) {
  const styleColorBook = Cookies.get("color") == "book";
  const styleColorNight = Cookies.get("color") == "night";

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  // console.log(state);
  // console.log(darkMode);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [navbar, setNavbar] = useState(true);
  const [navbarHover, setNavbarHover] = useState(true);
  const [backtotop, setBackToTop] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  const SetbackToTop = () => {
    if (window.scrollY >= 50) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };

  const onMouseEnterHandler = () => {
    setNavbarHover(true);
  };
  const onMouseLeaveHandler = () => {
    setNavbarHover(false);
  };

  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", SetbackToTop);
  }, []);

  useEffect(() => {
    handleBackToTop();
  }, []);
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <body
        className={
          styleColorBook
            ? "body-add-class-color-book"
            : styleColorNight
            ? "body-add-class-color-night"
            : ""
        }
      >
        <navbar className="header-PC">
          <header className={navbar ? "" : "scroll"}>
            <div className="sticky-bg"></div>
            <a className="brand" href="http://pebbledesign.com/">
              <div className="image-logo-header">
                <Image
                  src={`/media/baner-logo-red-text-white.png`}
                  className="logo"
                  width={481}
                  height={82}
                  alt="description of image"
                />
              </div>
              <div className="image-logo-baner">
                <Image
                  src={`/media/logo-red.png`}
                  className="logo-thumb"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
            </a>
            <nav>
              <ul className={navbarHover ? "main-nav hover" : "main-nav"}>
                <li
                  className="first-level left"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/`} passHref>
                    <span className={navbar ? "" : "color-black"}>
                      Trang Ch???
                    </span>
                  </Link>
                </li>
                <li
                  className="first-level left"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Analysis`} passHref>
                    <span className={navbar ? "" : "color-black"}>
                      Nghi??n c???u l???ch s???
                    </span>
                  </Link>
                  <ul className="submenu">
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_1.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">
                            Kinh T??? - Ch??nh Tr???
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_2.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">V???t D???ng - ????? C???</p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_3.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">Trang Ph???c</p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_4.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">
                            Phong T???c - L??? Nghi
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_5.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">Ki???n Tr??c</p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/platform_6.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-right-20"
                          }
                        >
                          <p className="submenu-title-text">
                            Nh??n V???t - Giai Tho???i
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Project`} passHref>
                    <span className={navbar ? "" : "color-black"}>D??? ??n</span>
                  </Link>
                  <ul className="submenu">
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/project_1.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-lef-10"
                          }
                        >
                          <p className="submenu-title-text">
                            Trung H??ng Li???t Truy???n
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/project_2.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-lef-10"
                          }
                        >
                          <p className="submenu-title-text">
                            Truy???n K??? M???n L???c
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="submenu-col">
                      <a href="#">
                        <Image
                          src={`/media/project_3.jpg`}
                          className="current"
                          width={242}
                          height={162}
                          alt="description of image"
                        />
                        <div
                          className={
                            navbar
                              ? "submenu-title"
                              : "submenu-title magrin-lef-10"
                          }
                        >
                          <p className="submenu-title-text">Game Mobile</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Contact`} passHref>
                    <span className={navbar ? "" : "color-black"}>Li??n H???</span>
                  </Link>
                </li>
                <li
                  className="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Recruit`} passHref>
                    <span className={navbar ? "" : "color-black"}>
                      Tuy???n D???ng
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </navbar>

        <header className="header-mobile">
          <nav className="navbar-mobile">
            <div className="navbar-mobile-menu" id="menu">
              <ul className="navbar-mobile-menu-list">
                <li className="navbar-mobile-menu-item">
                  <Link href={"/"} passHref>
                    {router.pathname == "/" ? (
                      <div className="navbar-mobile-menu-link navbar-mobile-menu-link-is-active">
                        <i className="navbar-mobile-menu-link-icon fas fa-home active-click-menu" />
                        <p className="navbar-mobile-menu-name active-click-menu">
                          Trang Ch???
                        </p>
                      </div>
                    ) : (
                      <div className="navbar-mobile-menu-link ">
                        <i className="navbar-mobile-menu-link-icon fas fa-home" />
                        <p className="navbar-mobile-menu-name">Trang Ch???</p>
                      </div>
                    )}
                  </Link>
                </li>
                <li className="navbar-mobile-menu-item">
                  <Link href={"/Analysis"} passHref>
                    {router.pathname.includes("Analysis") ? (
                      <div className="navbar-mobile-menu-link navbar-mobile-menu-link-is-active">
                        <i className="navbar-mobile-menu-link-icon fas fa-book-open active-click-menu" />
                        <p className="navbar-mobile-menu-name active-click-menu">
                          Nghi??n C???u
                        </p>
                      </div>
                    ) : (
                      <div className="navbar-mobile-menu-link ">
                        <i className="navbar-mobile-menu-link-icon fas fa-book-open" />
                        <p className="navbar-mobile-menu-name">Nghi??n C???u</p>
                      </div>
                    )}
                  </Link>
                </li>
                <li className="navbar-mobile-menu-item">
                  <Link href={"/Project"} passHref>
                    {router.pathname.includes("Project") ? (
                      <div className="navbar-mobile-menu-link navbar-mobile-menu-link-is-active">
                        <i className="navbar-mobile-menu-link-icon fas fa-briefcase active-click-menu" />
                        <p className="navbar-mobile-menu-name active-click-menu">
                          D??? ??n
                        </p>
                      </div>
                    ) : (
                      <div className="navbar-mobile-menu-link ">
                        <i className="navbar-mobile-menu-link-icon fas fa-briefcase" />
                        <p className="navbar-mobile-menu-name">D??? ??n</p>
                      </div>
                    )}
                  </Link>
                </li>
                <li className="navbar-mobile-menu-item">
                  <Link href={"/login"} passHref>
                    {router.pathname.includes("login") ? (
                      <div className="navbar-mobile-menu-link navbar-mobile-menu-link-is-active">
                        <i className="navbar-mobile-menu-link-icon fas fa-user-alt active-click-menu" />
                        <p className="navbar-mobile-menu-name active-click-menu">
                          ????ng Nh???p
                        </p>
                      </div>
                    ) : (
                      <div className="navbar-mobile-menu-link ">
                        <i className="navbar-mobile-menu-link-icon fas fa-user-alt" />
                        <p className="navbar-mobile-menu-name">????ng Nh???p</p>
                      </div>
                    )}
                  </Link>
                </li>
                <li className="navbar-mobile-menu-item">
                  <Link href={"/menu"} passHref>
                    {router.pathname.includes("menu") ? (
                      <div className="navbar-mobile-menu-link navbar-mobile-menu-link-is-active">
                        <i className="navbar-mobile-menu-link-icon fas fa-align-justify active-click-menu" />
                        <p className="navbar-mobile-menu-name active-click-menu">
                          Menu
                        </p>
                      </div>
                    ) : (
                      <div className="navbar-mobile-menu-link ">
                        <i className="navbar-mobile-menu-link-icon fas fa-align-justify" />
                        <p className="navbar-mobile-menu-name">Menu</p>
                      </div>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="layout-my">
          <Link href={`/login`} passHref>
            <div className="layout-my-login">
              <i
                className={
                  navbar
                    ? "layout-my-login-icon fa fa-user-circle"
                    : "layout-my-login-icon fa fa-user-circle color-black"
                }
              />
              <p
                className={
                  navbar
                    ? "layout-my-login-text"
                    : "layout-my-login-text color-black"
                }
              >
                ????ng Nh???p
              </p>
            </div>
          </Link>
          <Link href={`/login`} passHref>
            <div className="layout-my-notifi wrapper">
              <div className="layout-my-notifi-bell bell" id="bell-1">
                <i
                  className={
                    navbar
                      ? "layout-my-notifi-bell-icon anchor material-icons layer-1 fa fa-bell"
                      : "layout-my-notifi-bell-icon anchor material-icons layer-1 fa fa-bell color-black"
                  }
                />
                <i
                  className={
                    navbar
                      ? "layout-my-notifi-bell-icon anchor material-icons layer-2 fa fa-bell"
                      : "layout-my-notifi-bell-icon anchor material-icons layer-2 fa fa-bell color-black"
                  }
                />
                <i
                  className={
                    navbar
                      ? "layout-my-notifi-bell-icon anchor material-icons layer-3 fa fa-bell"
                      : "layout-my-notifi-bell-icon anchor material-icons layer-3 fa fa-bell color-black"
                  }
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="">{children}</div>
        <div
          className={backtotop ? "home-back-to-top active" : "home-back-to-top"}
        >
          <button className="noselect" onClick={handleBackToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>
          </button>
        </div>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </div>
  );
}
