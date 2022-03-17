import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Components/Layout";
import dynamic from "next/dynamic";

const Analysis = ({ children }) => {
  //   const DynamicComponent = dynamic(() => import("../components/hello"));

  const [menu, setMenu] = useState(true);

  const changeMenuFixed = () => {
    if (window.scrollY >= 280) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeMenuFixed);
  }, []);
  return (
    <Layout>
      <div className="analysis">
        <div className="analysis-baner"></div>
        <div
          className={
            menu ? "analysis-navbar-sub" : "analysis-navbar-sub-active"
          }
        ></div>
        <div className={menu ? "analysis-navbar" : "fixed analysis-navbar"}>
          <Link href={`/Analysis`} passHref>
            <div className="analysis-navbar-heder">
              <div className="analysis-navbar-heder-img">
                <Image
                  src={`/media/list-item-icon.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <div className="analysis-navbar-heder-text"></div>
            </div>
          </Link>
          <Link href={`/`} className="analysis-navbar-menu" passHref>
            <div className="analysis-navbar-menu-text active-navber-select">
              Thời Kỳ Nhà Mạc
            </div>
          </Link>
          <Link
            href={`/Analysis/dang-ngoai`}
            className="analysis-navbar-menu"
            passHref
          >
            <div className="analysis-navbar-menu-text">Đàng Ngoài</div>
          </Link>
          <Link href={`/`} className="analysis-navbar-menu" passHref>
            <div className="analysis-navbar-menu-text">Đàng Trong</div>
          </Link>
          <Link href={`/`} className="analysis-navbar-menu" passHref>
            <div className="analysis-navbar-menu-text">
              Tây Sơn - Tiền Nguyễn
            </div>
          </Link>
        </div>
        <div className="">{children}</div>
        <div className="analysis-menu">
          <nav className="analysis-menu-sidebar-navigation">
            <ul>
              <li className="analysis-menu-tooltip">
                <i className="fa fa-share-alt"></i>
                <span className="analysis-menu-tooltip">
                  Kinh Tế - Chính Trị
                </span>
              </li>
              <li>
                <i className="fa fa-hdd-o" />
                <span className="analysis-menu-tooltip">Vật Dụng - Đồ Cụ</span>
              </li>
              <li>
                <i className="fa fa-newspaper-o" />
                <span className="analysis-menu-tooltip">Trang Phục</span>
              </li>
              <li>
                <i className="fa fa-print" />
                <span className="analysis-menu-tooltip">
                  Phong Tục - Lễ Nghi
                </span>
              </li>
              <li>
                <i className="fa fa-sliders" />
                <span className="analysis-menu-tooltip">Kiến Trúc</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
