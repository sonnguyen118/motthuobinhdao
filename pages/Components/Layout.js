import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Store } from "../../utils/Store";
import Cookies from "js-cookie";

import Footer from "./Footer";

export default function Layout({ title, children, description }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
    console.log(newDarkMode);
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

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
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
  }, []);
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/media/logo-red.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,500;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css"
          integrity="sha512-3PN6gfRNZEX4YFyz+sIyTF6pGlQiryJu9NlGhu9LrLMQ7eDjNgudQoFDK3WSNAayeIKc6B8WXXpo4a7HqxjKwg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <title>Một Thuở Binh Đao 3D Studio &amp; Features | Criti 3D</title>
      </Head>
      <body className="">
        <navbar>
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
                  <Link href={`/`}>
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
                  <span className={navbar ? "" : "color-black"}>
                    Nghiên cứu lịch sử
                  </span>
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
                          <p className="submenu-title-text">Kiến Trúc</p>
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
                              : "submenu-title magrin-right-20"
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
                              : "submenu-title magrin-right-20"
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
                              : "submenu-title magrin-right-20"
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
                  <Link href={`/Contact`}>
                    <span className={navbar ? "" : "color-black"}>Liên Hệ</span>
                  </Link>
                </li>
                <li
                  className="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link href={`/Recruit`}>
                    <span className={navbar ? "" : "color-black"}>
                      Tuyển Dụng
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </navbar>

        <div className="layout-my">
          <Link href={`/login`}>
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
          <Link href={`/login`}>
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

        <footer className="">
          <Footer />
        </footer>
      </body>
    </div>
  );
}
