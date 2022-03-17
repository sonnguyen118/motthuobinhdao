import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Components/Layout";
import dynamic from "next/dynamic";

const Analysis = ({ children }) => {
  //   const DynamicComponent = dynamic(() => import("../components/hello"));
  return (
    <Layout>
      <div className="analysis">
        <div className="analysis-baner"></div>
        <div className="analysis-navbar">
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
              <p className="analysis-navbar-heder-text">
                Phân Loại Theo Thời Kỳ
              </p>
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
              <li className="analysis-menu-active">
                <i className="analysis-menu-fa fa-share-alt" />
                <span className="analysis-menu-tooltip">Connections</span>
              </li>
              <li>
                <i className="fa fa-hdd-o" />
                <span className="analysis-menu-tooltip">Devices</span>
              </li>
              <li>
                <i className="fa fa-newspaper-o" />
                <span className="analysis-menu-tooltip">Contacts</span>
              </li>
              <li>
                <i className="fa fa-print" />
                <span className="analysis-menu-tooltip">Fax</span>
              </li>
              <li>
                <i className="fa fa-sliders" />
                <span className="analysis-menu-tooltip">Settings</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
