import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Components/Layout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ListAnalysis from "../Components/ListAnalysis";
import Cookies from "js-cookie";

const Analysis = ({ children }) => {
  //   const DynamicComponent = dynamic(() => import("../components/hello"));
  const [menu, setMenu] = useState(true);
  const [pause, setPause] = useState(true);
  const [voice, setVoice] = useState(true);
  // const ListAnalysis = dynamic(() => import("../Components/ListAnalysis"));
  // const [value, setValue] = useState("b");

  const router = useRouter();
  useEffect(() => {
    if (Cookies.get("voice") == "women") {
      setVoice(false);
    }
    if (Cookies.get("color") == "night") {
      setColor1(false);
      setColor2(true);
      setColor3(false);
    }
    if (Cookies.get("color") == "sun") {
      setColor1(true);
      setColor2(false);
      setColor3(false);
    }
    if (Cookies.get("color") == "book") {
      setColor1(false);
      setColor2(false);
      setColor3(true);
    }
  }, []);

  const changeMenuFixed = () => {
    if (window.scrollY >= 340) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const handleChangeSelect = (e) => {
    console.log(e.target.value);
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

  // Audio
  const musicMenTracks = [
    {
      name: "Memories",
      src: "/media/voice-men-kientruc-chuakeo.mp3",
    },
  ];

  const musicWomenTracks = [
    {
      name: "Creative Minds",
      src: "/media/voice-woman-kientruc-chuakeo.mp3",
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const onClickVoice = (e) => {
    if (pause == true) {
      setPause(false);
    } else {
      setPause(true);
    }
  };

  //code setting chọn voice
  const ChangeHandlerInputVoice = (e) => {
    console.log(e.target.value);
    if (e.target.value == "men") {
      setVoice(true);
      Cookies.set("voice", "men");
    } else {
      setVoice(false);
      Cookies.set("voice", "women");
    }
  };
  // code đổi màu website
  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);

  const handleChangeColorWeb1 = () => {
    if (color2) {
      setColor1(true);
      setColor2(false);
      setColor3(false);
      Cookies.set("color", "sun");
    } else {
      setColor1(false);
      setColor2(true);
      setColor3(false);
      Cookies.set("color", "night");
    }
  };
  console.log(Cookies.get("color"), Cookies.get("voice"));
  const handleChangeColorWeb2 = () => {
    if (color3) {
      setColor1(true);
      setColor2(false);
      setColor3(false);
      Cookies.set("color", "sun");
    } else {
      setColor1(false);
      setColor2(false);
      setColor3(true);
      Cookies.set("color", "book");
    }
  };
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
              Tây Sơn - Tiền Nguyễn
            </div>
          </Link>
        </div>
        <div className="analysis-menu">
          <nav className="analysis-menu-sidebar-navigation">
            <ul>
              <li className="analysis-menu-tooltip">
                <i className="fa fa-share-alt"></i>
                <span className="analysis-menu-tooltip">Chia Sẻ</span>
              </li>
              <li>
                <i className="fa fa-hdd-o" />
                <span className="analysis-menu-tooltip">Thiết Bị</span>
              </li>
              <li>
                <i className="fa fa-newspaper-o" />
                <span className="analysis-menu-tooltip">Danh Sách</span>
              </li>
              <li>
                <i className="fa fa-print" />
                <span className="analysis-menu-tooltip">Lưu Bản PDF</span>
              </li>
              <li className="app-audi">
                <i className={pause ? "fas fa-play" : "fas fa-stop-circle"} />
                {/* <span className="analysis-menu-tooltip">Báo Nói</span> */}
                <div className="app-audio">
                  {voice ? (
                    <AudioPlayer
                      className="audio-box"
                      // style={{ width: "300px" }}
                      style={{ borderRadius: "1rem" }}
                      autoPlay
                      // layout="horizontal"
                      // layout="vertical"
                      layout="stacked"
                      src={`/media/voice-men-kientruc-chuakeo.mp3`}
                      onPlay={(e) => onClickVoice()}
                      onPause={(e) => onClickVoice()}
                      showSkipControls={false}
                      showJumpControls={false}
                      // showDownloadProgress={true}
                      // customProgressBarSection={[]}
                      header={
                        <div className="audio-box-header">
                          <div className="audio-box-header-img">
                            <Image
                              src={`/media/voice-man.png`}
                              layout="fill"
                              objectFit="contain"
                              alt="description of image"
                            />
                          </div>
                          <p className="audio-box-header-text">Giọng Đọc Nam</p>
                        </div>
                      }
                      // footer="All music from: www.bensound.com"
                      // onClickPrevious={handleClickPrevious}
                      // onClickNext={handleClickNext}
                      // onEnded={handleClickNext}
                      // other props here
                    />
                  ) : (
                    <AudioPlayer
                      className="audio-box"
                      // style={{ width: "300px" }}
                      style={{ borderRadius: "1rem" }}
                      // autoPlay
                      autoPlay={false}
                      // layout="horizontal"
                      // layout="vertical"
                      layout="stacked"
                      src={`/media/voice-woman-kientruc-chuakeo.mp3`}
                      onPlay={(e) => onClickVoice()}
                      onPause={(e) => onClickVoice()}
                      showSkipControls={false}
                      showJumpControls={false}
                      // showDownloadProgress={true}
                      // customProgressBarSection={[]}
                      header={
                        <div className="audio-box-header">
                          <div className="audio-box-header-img">
                            <Image
                              src={`/media/voice-woman.png`}
                              layout="fill"
                              objectFit="contain"
                              alt="description of image"
                            />
                          </div>
                          <p className="audio-box-header-text">Giọng Đọc Nữ</p>
                        </div>
                      }
                      // footer="All music from: www.bensound.com"
                      // onClickPrevious={handleClickPrevious}
                      // onClickNext={handleClickNext}
                      // onEnded={handleClickNext}
                      // other props here
                    />
                  )}
                </div>
              </li>
              <li className="settingColor">
                {color2 ? (
                  <i className="settingColor-icon fas fa-moon" />
                ) : (
                  <i
                    className={
                      color3
                        ? "settingColor-icon fas fa-book"
                        : "settingColor-icon fas fa-sun"
                    }
                  />
                )}

                <div className="settingColor-block">
                  <div className="settingColor-block-list">
                    <div
                      className="settingColor-block-list-item"
                      onClick={handleChangeColorWeb1}
                    >
                      {color2 ? (
                        <i className="settingColor-block-list-item-icon fas fa-sun" />
                      ) : (
                        <i className="settingColor-block-list-item-icon fas fa-moon" />
                      )}
                    </div>
                    <div
                      className="settingColor-block-list-item"
                      onClick={handleChangeColorWeb2}
                    >
                      {color3 ? (
                        <i className="settingColor-block-list-item-icon fas fa-sun" />
                      ) : (
                        <i className="settingColor-block-list-item-icon fas fa-book" />
                      )}
                    </div>
                  </div>
                </div>
              </li>
              <li className="setting">
                <i className="fa fa-sliders" />
                <div className="setting-block">
                  <div className="setting-block-line">
                    <p className="setting-block-line-title">Chỉnh Giọng Đọc</p>
                    <div className="setting-block-line-input">
                      {voice ? (
                        <input
                          className="setting-block-line-input-box"
                          type="radio"
                          id="huey"
                          name="drone"
                          value={"men"}
                          checked
                          onClick={ChangeHandlerInputVoice}
                        />
                      ) : (
                        <input
                          className="setting-block-line-input-box"
                          type="radio"
                          id="huey"
                          name="drone"
                          value={"men"}
                          onClick={ChangeHandlerInputVoice}
                        />
                      )}
                      <label
                        className="setting-block-line-input-label"
                        htmlFor="huey"
                      >
                        Giọng Nam
                      </label>
                    </div>
                    <div className="setting-block-line-input">
                      {voice ? (
                        <input
                          className="setting-block-line-input-box"
                          type="radio"
                          id="huey"
                          name="drone"
                          value={"women"}
                          onClick={ChangeHandlerInputVoice}
                        />
                      ) : (
                        <input
                          className="setting-block-line-input-box"
                          type="radio"
                          id="huey"
                          name="drone"
                          value={"women"}
                          checked
                          onClick={ChangeHandlerInputVoice}
                        />
                      )}

                      <label
                        className="setting-block-line-input-label"
                        htmlFor="huey"
                      >
                        Giọng Nữ
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
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
