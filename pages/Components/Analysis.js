import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "react-h5-audio-player/lib/styles.css";
import { useRouter } from "next/router";
import ListAnalysis from "./ListAnalysis";
import Cookies from "js-cookie";
import Layout from "./Layout";

const Analysis = ({ children }) => {
  const router = useRouter();
  const [menu, setMenu] = useState(true);

  const changeMenuFixed = () => {
    if (window.scrollY >= 340) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const handleChangeSelect = (e) => {
    // console.log(e.target.value);
    // router.push(e.target.value);
    if (e.target.value == "/Analysis") {
      if (router.pathname.includes("dang-ngoai")) {
        router.push("/Analysis/dang-ngoai");
      } else if (router.pathname.includes("dang-trong")) {
        router.push("/Analysis/dang-trong");
      } else if (router.pathname.includes("nha-mac")) {
        router.push("/Analysis/nha-mac");
      } else if (router.pathname.includes("tay-son-nha-nguyen")) {
        router.push("/Analysis/tay-son-nha-nguyen");
      } else {
        router.push("/Analysis");
      }
    } else if (router.pathname == "/Analysis") {
      router.push("/Analysis" + e.target.value);
    } else if (
      router.pathname === "/Analysis/kien-truc" ||
      router.pathname === "/Analysis/kinh-te-chinh-tri" ||
      router.pathname === "/Analysis/nhan-vat-giai-thoai" ||
      router.pathname === "/Analysis/phong-tuc-le-nghi" ||
      router.pathname === "/Analysis/trang-phuc" ||
      router.pathname === "/Analysis/vat-dung-do-cu"
    ) {
      router.push("/Analysis" + e.target.value);
    } else if (
      router.pathname === "/Analysis/nha-mac" ||
      router.pathname === "/Analysis/dang-ngoai" ||
      router.pathname === "/Analysis/dang-trong" ||
      router.pathname === "/Analysis/tay-son-nha-nguyen"
    ) {
      router.push(router.pathname + e.target.value);
    } else if (router.pathname.includes("nha-mac")) {
      router.push(
        { pathname: "/Analysis/nha-mac" + e.target.value },
        { scroll: false }
      );
    } else if (router.pathname.includes("dang-ngoai")) {
      router.push("/Analysis/dang-ngoai" + e.target.value);
    } else if (router.pathname.includes("dang-trong")) {
      router.push("/Analysis/dang-trong" + e.target.value);
    } else if (router.pathname.includes("tay-son-nha-nguyen")) {
      router.push("/Analysis/tay-son-nha-nguyen" + e.target.value);
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
          <>
            <div className="analysis-navbar-heder">
              <div className="analysis-navbar-heder-img">
                <Image
                  src={`/media/list-item-icon.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <div className="analysis-navbar-heder-text">
                <select onChange={handleChangeSelect}>
                  {(router.pathname == "/Analysis/nha-mac") |
                  (router.pathname == "/Analysis/dang-ngoai") |
                  (router.pathname == "/Analysis/dang-trong") |
                  (router.pathname == "/Analysis/tay-son-nha-nguyen") ? (
                    <option selected value={"/Analysis"}>
                      Chọn Danh Mục Nghiên Cứu
                    </option>
                  ) : (
                    <option value={"/Analysis"}>
                      Chọn Danh Mục Nghiên Cứu
                    </option>
                  )}
                  {/* option */}
                  {router.pathname.includes("kinh-te-chinh-tri") ? (
                    <option selected value={"/kinh-te-chinh-tri"}>
                      Kinh Tế - Chính Trị
                    </option>
                  ) : (
                    <option value={"/kinh-te-chinh-tri"}>
                      Kinh Tế - Chính Trị
                    </option>
                  )}
                  {/* option */}
                  {router.pathname.includes("vat-dung-do-cu") ? (
                    <option selected value={"/vat-dung-do-cu"}>
                      Vật Dụng - Đồ Cụ
                    </option>
                  ) : (
                    <option value={"/vat-dung-do-cu"}>Vật Dụng - Đồ Cụ</option>
                  )}
                  {/* option */}
                  {router.pathname.includes("trang-phuc") ? (
                    <option selected value={"/trang-phuc"}>
                      Trang Phục
                    </option>
                  ) : (
                    <option value={"/trang-phuc"}>Trang Phục</option>
                  )}
                  {/* option */}
                  {router.pathname.includes("phong-tuc-le-nghi") ? (
                    <option selected value={"/phong-tuc-le-nghi"}>
                      Phong Tục - Lễ Nghi
                    </option>
                  ) : (
                    <option value={"/phong-tuc-le-nghi"}>
                      Phong Tục - Lễ Nghi
                    </option>
                  )}
                  {/* option */}
                  {router.pathname.includes("kien-truc") ? (
                    <option selected value={"/kien-truc"}>
                      Kiến Trúc
                    </option>
                  ) : (
                    <option value={"/kien-truc"}>Kiến Trúc</option>
                  )}
                  {/* option */}
                  {router.pathname.includes("nhan-vat-giai-thoai") ? (
                    <option selected value={"/nhan-vat-giai-thoai"}>
                      Nhân Vật - Giai Thoại
                    </option>
                  ) : (
                    <option value={"/nhan-vat-giai-thoai"}>
                      Nhân Vật - Giai Thoại
                    </option>
                  )}
                </select>
              </div>
            </div>
          </>
          <Link
            href={`/Analysis/nha-mac`}
            className="analysis-navbar-menu"
            passHref
          >
            <div
              className={
                router.pathname.includes("/Analysis/nha-mac")
                  ? "analysis-navbar-menu-text active-navber-select"
                  : "analysis-navbar-menu-text"
              }
            >
              Thời Kỳ Nhà Mạc
            </div>
          </Link>
          <Link
            href={`/Analysis/dang-ngoai`}
            className="analysis-navbar-menu"
            passHref
            // scroll={false}
          >
            <div
              className={
                router.pathname.includes("/Analysis/dang-ngoai")
                  ? "analysis-navbar-menu-text active-navber-select"
                  : "analysis-navbar-menu-text"
              }
            >
              Đàng Ngoài
            </div>
          </Link>
          <Link
            href={`/Analysis/dang-trong`}
            // scroll={false}
            className="analysis-navbar-menu"
            passHref
          >
            <div
              className={
                router.pathname.includes("/Analysis/dang-trong")
                  ? "analysis-navbar-menu-text active-navber-select"
                  : "analysis-navbar-menu-text"
              }
            >
              Đàng Trong
            </div>
          </Link>
          <Link
            href={`/Analysis/tay-son-nha-nguyen`}
            className="analysis-navbar-menu"
            passHref
          >
            <div
              className={
                router.pathname.includes("/Analysis/tay-son-nha-nguyen")
                  ? "analysis-navbar-menu-text active-navber-select"
                  : "analysis-navbar-menu-text"
              }
            >
              Tây Sơn - Nhà Nguyễn
            </div>
          </Link>
        </div>
        <div className="menu-analysis">
          <div className="menu-analysis-body">{children}</div>
          <div className="menu-analysis-list">
            <ListAnalysis />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
