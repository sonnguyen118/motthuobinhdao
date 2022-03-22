import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";

import Link from "next/link";
// import NextLink from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";

import { Store } from "../../utils/Store";
import Cookies from "js-cookie";

import Footer from "./Footer";

export default function Layout({ title, children, description }) {
  const styleColorBook = Cookies.get("color") == "book";
  const styleColorNight = Cookies.get("color") == "night";

  // const router = useRouter();
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
  const [navbarmobile1, setNavbarMobile1] = useState(false);
  const [navbarmobile2, setNavbarMobile2] = useState(false);
  const [navbarmobile4, setNavbarMobile4] = useState(false);
  const [navbarmobile3, setNavbarMobile3] = useState(false);
  const handleOnclickMenuMobile1 = () => {
    setNavbarMobile1(true);
    setNavbarMobile2(false);
    setNavbarMobile3(false);
    setNavbarMobile4(false);
  };
  const handleOnclickMenuMobile2 = () => {
    setNavbarMobile2(true);
    setNavbarMobile1(false);
    setNavbarMobile3(false);
    setNavbarMobile4(false);
  };
  const handleOnclickMenuMobile3 = () => {
    setNavbarMobile3(true);
    setNavbarMobile1(false);
    setNavbarMobile1(false);
    setNavbarMobile4(false);
  };
  const handleOnclickMenuMobile4 = () => {
    setNavbarMobile4(true);
    setNavbarMobile1(false);
    setNavbarMobile2(false);
    setNavbarMobile3(false);
  };

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
                      Trang Chủ
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
                      Nghiên cứu lịch sử
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
                            Kinh Tế - Chính Trị
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
                          <p className="submenu-title-text">Vật Dụng - Đồ Cụ</p>
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
                          <p className="submenu-title-text">Trang Phục</p>
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
                            Phong Tục - Lễ Nghi
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
                          <p className="submenu-title-text">Kiến Trúc</p>
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
                            Nhân Vật - Giai Thoại
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
                  <span className={navbar ? "" : "color-black"}>Dự Án</span>
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
                            Trung Hưng Liệt Truyện
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
                            Truyền Kỳ Mạn Lục
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
                    <span className={navbar ? "" : "color-black"}>Liên Hệ</span>
                  </Link>
                </li>
                <li
                  className="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Recruit`} passHref>
                    <span className={navbar ? "" : "color-black"}>
                      Tuyển Dụng
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
                <li
                  className="navbar-mobile-menu-item"
                  onClick={handleOnclickMenuMobile1}
                >
                  <Link href="#" passHref>
                    <div
                      className={
                        navbarmobile1
                          ? "navbar-mobile-menu-link navbar-mobile-menu-link-is-active"
                          : "navbar-mobile-menu-link"
                      }
                    >
                      <i
                        className={
                          navbarmobile1
                            ? "navbar-mobile-menu-link-icon fas fa-home active-click-menu"
                            : "navbar-mobile-menu-link-icon fas fa-home"
                        }
                      />
                      <p
                        className={
                          navbarmobile1
                            ? "navbar-mobile-menu-name active-click-menu"
                            : "navbar-mobile-menu-name"
                        }
                      >
                        Trang Chủ
                      </p>
                    </div>
                  </Link>
                </li>
                <li
                  className="navbar-mobile-menu-item"
                  onClick={handleOnclickMenuMobile2}
                >
                  <Link href="#" passHref>
                    <div
                      className={
                        navbarmobile2
                          ? "navbar-mobile-menu-link navbar-mobile-menu-link-is-active"
                          : "navbar-mobile-menu-link"
                      }
                    >
                      <i
                        className={
                          navbarmobile2
                            ? "navbar-mobile-menu-link-icon fas fa-book-open active-click-menu"
                            : "navbar-mobile-menu-link-icon fas fa-book-open"
                        }
                      />
                      <p
                        className={
                          navbarmobile2
                            ? "navbar-mobile-menu-name active-click-menu"
                            : "navbar-mobile-menu-name"
                        }
                      >
                        Nghiên Cứu
                      </p>
                    </div>
                  </Link>
                </li>
                <li
                  className="navbar-mobile-menu-item"
                  onClick={handleOnclickMenuMobile3}
                >
                  <Link href="#" passHref>
                    <div
                      className={
                        navbarmobile3
                          ? "navbar-mobile-menu-link navbar-mobile-menu-link-is-active"
                          : "navbar-mobile-menu-link"
                      }
                    >
                      <i
                        className={
                          navbarmobile3
                            ? "navbar-mobile-menu-link-icon fas fa-briefcase active-click-menu"
                            : "navbar-mobile-menu-link-icon fas fa-briefcase"
                        }
                      />
                      <p
                        className={
                          navbarmobile3
                            ? "navbar-mobile-menu-name active-click-menu"
                            : "navbar-mobile-menu-name"
                        }
                      >
                        Dự Án
                      </p>
                    </div>
                  </Link>
                </li>
                <li
                  className="navbar-mobile-menu-item"
                  onClick={handleOnclickMenuMobile4}
                >
                  <Link href="#" passHref>
                    <div
                      className={
                        navbarmobile4
                          ? "navbar-mobile-menu-link navbar-mobile-menu-link-is-active"
                          : "navbar-mobile-menu-link"
                      }
                    >
                      <i
                        className={
                          navbarmobile4
                            ? "navbar-mobile-menu-link-icon fas fa-user-alt active-click-menu"
                            : "navbar-mobile-menu-link-icon fas fa-user-alt"
                        }
                      />
                      <p
                        className={
                          navbarmobile4
                            ? "navbar-mobile-menu-name active-click-menu"
                            : "navbar-mobile-menu-name"
                        }
                      >
                        Đăng Nhập
                      </p>
                    </div>
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
                Đăng Nhập
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
