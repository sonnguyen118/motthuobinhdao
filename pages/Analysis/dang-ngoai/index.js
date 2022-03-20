import React, { useContext, useState, useEffect } from "react";
import Analysis from "../index";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

const DangNgoai = () => {
  const [pause, setPause] = useState(true);
  const [voice, setVoice] = useState(true);

  const [colapp1, setColapp1] = useState(true);
  const [colapp2, setColapp2] = useState(true);
  const [colapp3, setColapp3] = useState(true);
  const [colapp4, setColapp4] = useState(true);
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
  const onClickVoice = (e) => {
    if (pause == true) {
      setPause(false);
    } else {
      setPause(true);
    }
  };

  //code setting chọn voice
  const ChangeHandlerInputVoice = (e) => {
    // console.log(e.target.value);
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
  // console.log(Cookies.get("color"), Cookies.get("voice"));
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
  const Collapse1 = () => {
    if (colapp1 == true) {
      setColapp1(false);
    } else {
      setColapp1(true);
    }
  };
  const Collapse2 = () => {
    if (colapp2 == true) {
      setColapp2(false);
    } else {
      setColapp2(true);
    }
  };
  const Collapse3 = () => {
    if (colapp3 == true) {
      setColapp3(false);
    } else {
      setColapp3(true);
    }
  };
  const Collapse4 = () => {
    if (colapp4 == true) {
      setColapp4(false);
    } else {
      setColapp4(true);
    }
  };
  const router = useRouter();
  console.log("màu", Cookies.get("color"));
  const [styleColorNight, SetstyleColorNight] = useState(
    Cookies.get("color") == "night"
  );
  useEffect(() => {
    SetstyleColorNight(Cookies.get("color") == "night");
    console.log("usehook đã thay đỏi", styleColorNight);
  }, []);
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p
          className={
            color2
              ? "analysis-component-navigation-p white-text"
              : "analysis-component-navigation-p"
          }
        >
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1
              className={
                color2
                  ? "analysis-component_index-header-h1 white-text"
                  : "analysis-component_index-header-h1"
              }
            >
              ĐÀNG NGOÀI
            </h1>
            <h3
              className={
                color2
                  ? "analysis-component_index-header-h3 white-text"
                  : "analysis-component_index-header-h3"
              }
            >
              VUA LÊ - CHÚA TRỊNH
            </h3>
          </div>
          <div
            className={
              color2
                ? "analysis-component_index-content white-text"
                : "analysis-component_index-content"
            }
          >
            Đàng Ngoài (sử liệu chữ Hán: 北河 Bắc Hà abc) hay An Nam (chữ Hán:
            安南國 / An Nam quốc), Vương quốc Đông Kinh là tên gọi vùng lãnh thổ
            Đại Việt kiểm soát bởi Chúa Trịnh, xác định từ sông Gianh (tỉnh
            Quảng Bình) trở ra Bắc. Kinh đô Đàng Ngoài là Thăng Long (còn gọi là
            Đông Kinh, Kinh Kỳ hay Kẻ Chợ). 1592 nhà Mạc rút lên Cao Bằng, chính
            thức kết thức kết thúc thời kỳ chuyên chính của Nhà Mạc tại Thăng
            Long. <br></br>
            <br></br>
            Đến năm 1786 khi Nguyễn Huệ kéo quân ra Bắc tiêu diệt thế lực họ
            Trịnh, đất nước tái thống nhất dưới triều Lê trên danh nghĩa trong
            một thời gian ngắn
          </div>

          <div className="analysis-component_index-menu">
            <ul className="tilesWrap row">
              <li className="analysis-component_index-menu-dangngoai-1 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  KINH TẾ - CHÍNH TRỊ
                </h3>
                <button>CHI TIẾT</button>
              </li>
              <li className="analysis-component_index-menu-dangngoai-2 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  VẬT DỤNG - ĐỒ CỤ
                </h3>
                <button>CHI TIẾT</button>
              </li>
              <li className="analysis-component_index-menu-dangngoai-3 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  TRANG PHỤC
                </h3>
                <button>CHI TIẾT</button>
              </li>
              <li className="analysis-component_index-menu-dangngoai-4 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  PHONG TỤC - LỄ NGHI
                </h3>
                <button>CHI TIẾT</button>
              </li>
              <li className="analysis-component_index-menu-dangngoai-5 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  KIẾN TRÚC
                </h3>
                <button>CHI TIẾT</button>
              </li>
              <li className="analysis-component_index-menu-dangngoai-6 col-md-3">
                <div className="analysis-component_index-menu-img">
                  <Image
                    src={`/media/dragon.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <h3 className="analysis-component_index-menu-title">
                  NHÂN VẬT - GIAI THOẠI
                </h3>
                <button>CHI TIẾT</button>
              </li>
            </ul>
          </div>
        </div>
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
                    autoPlay={false}
                    autoPlayAfterSrcChange={false}
                    // layout="horizontal"
                    // layout="vertical"
                    layout="stacked"
                    src={`/media/dang-ngoai-index-men.wav`}
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
                    autoPlayAfterSrcChange={false}
                    // layout="horizontal"
                    // layout="vertical"
                    layout="stacked"
                    src={`/media/dang-ngoai-index-women.wav`}
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
    </Analysis>
  );
};

export default DangNgoai;
