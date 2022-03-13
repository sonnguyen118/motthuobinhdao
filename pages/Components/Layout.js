import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;1,500;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <title>Một Thuở Binh Đao 3D Studio &amp; Features | Criti 3D</title>
      </Head>
      <body className="">
        <navbar>
          <header className={navbar ? "" : "scroll"}>
            <div class="sticky-bg"></div>
            <a class="brand" href="http://pebbledesign.com/">
              <img
                src={`/media/baner-logo-red-text-white.png`}
                class="logo"
                width={600}
                height={80}
              />
              <Image
                src={`/media/logo-red.png`}
                class="logo-thumb"
                width={100}
                height={100}
              />
            </a>
            <nav>
              <ul className={navbarHover ? "main-nav hover" : "main-nav"}>
                <li
                  class="first-level left"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <span className={navbar ? "" : "color-black"}>Trang Chủ</span>
                </li>
                <li
                  class="first-level left"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <span className={navbar ? "" : "color-black"}>
                    Nghiên cứu lịch sử
                  </span>
                  <ul class="submenu">
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/platform_1.jpg`} class="current" />
                        <div class="submenu-title">
                          <p class="submenu-title-text">
                            Kinh tế - Chính Trị - Giai Cấp
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/platform_2.jpg`} class="current" />
                        <div class="submenu-title">
                          <p class="submenu-title-text">
                            Nhân Vật - Các Cuộc Chiến
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/platform_3.jpg`} class="current" />
                        <div class="submenu-title">
                          <p class="submenu-title-text">
                            Trang Phục - Văn Hóa - Đồ Vật
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/platform_4.jpg`} class="current" />
                        <div class="submenu-title">
                          <p class="submenu-title-text">
                            Phong Tục - Giáo Tiếp Xã Hội
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  class="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <span className={navbar ? "" : "color-black"}>Dự Án</span>
                  <ul class="submenu">
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/project_1.jpg`} class="current" />
                        <div class="submenu-title">Trung Hưng Liệt Truyện</div>
                      </a>
                    </li>
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/project_2.jpg`} class="current" />
                        <div class="submenu-title">Truyền Kỳ Mạn Lục</div>
                      </a>
                    </li>
                    <li class="submenu-col">
                      <a href="#">
                        <img src={`/media/project_3.jpg`} class="current" />
                        <div class="submenu-title">Game - Giải Trí</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  class="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <span className={navbar ? "" : "color-black"}>Liên Hệ</span>
                </li>
                <li
                  class="first-level right"
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <span className={navbar ? "" : "color-black"}>
                    Tuyển Dụng
                  </span>
                </li>
              </ul>
            </nav>
          </header>
        </navbar>

        <div className="layout-my">
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
          <div class="layout-my-notifi wrapper">
            <div class="layout-my-notifi-bell bell" id="bell-1">
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
        </div>
        <div className="">{children}</div>

        <footer className="">
          <Footer />
        </footer>
      </body>
    </div>
  );
}