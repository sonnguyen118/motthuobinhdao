import React, { useContext, useState, useEffect } from "react";
import Analysis from "../index";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ErrorMessenger from "../../Home/ErrorMessenger";
import SucceedMessenger from "../../Home/SucceedMessenger";

const DangNgoai = () => {
  const [pause, setPause] = useState(true);
  // const [voice, setVoice] = useState(true);
  const [settingVoice, setSettingVoice] = useState(false);

  // const [colapp1, setColapp1] = useState(true);
  // const [colapp2, setColapp2] = useState(true);
  // const [colapp3, setColapp3] = useState(true);
  // const [colapp4, setColapp4] = useState(true);
  useEffect(() => {
    // if (Cookies.get("voice") == "women") {
    //   setVoice(false);
    // }
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

  const router = useRouter();
  console.log("màu", Cookies.get("color"));
  const [styleColorNight, SetstyleColorNight] = useState(
    Cookies.get("color") == "night"
  );
  useEffect(() => {
    SetstyleColorNight(Cookies.get("color") == "night");
    // console.log("usehook đã thay đỏi", styleColorNight);
  }, []);
  // change Voice\
  const [testvoiceplay1, setTestvoiceplay1] = useState(false);
  const [testvoiceplay2, setTestvoiceplay2] = useState(false);
  const [testvoiceplay3, setTestvoiceplay3] = useState(false);
  const [testvoiceplay4, setTestvoiceplay4] = useState(false);
  const [testvoiceplay5, setTestvoiceplay5] = useState(false);
  const [testvoiceplay6, setTestvoiceplay6] = useState(false);
  const [testvoiceplay7, setTestvoiceplay7] = useState(false);
  const [testvoiceplay8, setTestvoiceplay8] = useState(false);
  const [testvoiceplay9, setTestvoiceplay9] = useState(false);
  const [testvoiceplay10, setTestvoiceplay10] = useState(false);

  const handlPlayTestVoice1 = () => {
    if (testvoiceplay1) {
      setTestvoiceplay1(false);
      document.getElementById("player1").pause();
    } else {
      setTestvoiceplay1(true);

      document.getElementById("player1").play();
    }
  };
  const handlPlayTestVoice2 = () => {
    if (testvoiceplay2) {
      setTestvoiceplay2(false);
      document.getElementById("player2").pause();
    } else {
      setTestvoiceplay2(true);
      document.getElementById("player2").play();
    }
  };
  const handlPlayTestVoice3 = () => {
    if (testvoiceplay3) {
      setTestvoiceplay3(false);
      document.getElementById("player3").pause();
    } else {
      setTestvoiceplay3(true);

      document.getElementById("player3").play();
    }
  };
  const handlPlayTestVoice4 = () => {
    if (testvoiceplay4) {
      setTestvoiceplay4(false);
      document.getElementById("player4").pause();
    } else {
      setTestvoiceplay4(true);
      document.getElementById("player4").play();
    }
  };
  const handlPlayTestVoice5 = () => {
    if (testvoiceplay5) {
      setTestvoiceplay5(false);
      document.getElementById("player5").pause();
    } else {
      setTestvoiceplay5(true);
      document.getElementById("player5").play();
    }
  };
  const handlPlayTestVoice6 = () => {
    if (testvoiceplay6) {
      setTestvoiceplay6(false);
      document.getElementById("player6").pause();
    } else {
      setTestvoiceplay6(true);
      document.getElementById("player6").play();
    }
  };
  const handlPlayTestVoice7 = () => {
    if (testvoiceplay7) {
      setTestvoiceplay7(false);
      document.getElementById("player7").pause();
    } else {
      setTestvoiceplay7(true);
      document.getElementById("player7").play();
    }
  };
  const handlPlayTestVoice8 = () => {
    if (testvoiceplay8) {
      setTestvoiceplay8(false);
      document.getElementById("player8").pause();
    } else {
      setTestvoiceplay8(true);
      document.getElementById("player8").play();
    }
  };
  const handlPlayTestVoice9 = () => {
    if (testvoiceplay9) {
      setTestvoiceplay9(false);
      document.getElementById("player9").pause();
    } else {
      setTestvoiceplay9(true);
      document.getElementById("player9").play();
    }
  };
  const handlPlayTestVoice10 = () => {
    if (testvoiceplay10) {
      setTestvoiceplay10(false);
      document.getElementById("player10").pause();
    } else {
      setTestvoiceplay10(true);
      document.getElementById("player10").play();
    }
  };
  const [showchangevoice, setShowchangevoice] = useState(false);
  const handlCloseChangeVoice = () => {
    if (showchangevoice) {
      setShowchangevoice(false);
      console.log("ẩn");
    } else {
      setShowchangevoice(true);
      console.log("hiện");
    }
  };

  const handlPlayVoice = () => {
    if (pause == true) {
      setPause(false);
      if (Cookies.get("voice") == "ngoc-huyen") {
        document.getElementById("voice1").play();
      } else if (Cookies.get("voice") == "phu-thang") {
        document.getElementById("voice2").play();
      } else if (Cookies.get("voice") == "thanh-long") {
        document.getElementById("voice3").play();
      } else if (Cookies.get("voice") == "mai-phuong") {
        document.getElementById("voice4").play();
      } else if (Cookies.get("voice") == "huong-giang") {
        document.getElementById("voice5").play();
      } else if (Cookies.get("voice") == "duy-phuong") {
        document.getElementById("voice6").play();
      } else if (Cookies.get("voice") == "lan-trinh") {
        document.getElementById("voice7").play();
      } else if (Cookies.get("voice") == "thao-trinh") {
        document.getElementById("voice8").play();
      } else if (Cookies.get("voice") == "trung-kien") {
        document.getElementById("voice9").play();
      } else if (Cookies.get("voice") == "minh-hoang") {
        document.getElementById("voice10").play();
      }
    } else {
      setPause(true);
      if (Cookies.get("voice") == "ngoc-huyen") {
        document.getElementById("voice1").pause();
      } else if (Cookies.get("voice") == "phu-thang") {
        document.getElementById("voice2").pause();
      } else if (Cookies.get("voice") == "thanh-long") {
        document.getElementById("voice3").pause();
      } else if (Cookies.get("voice") == "mai-phuong") {
        document.getElementById("voice4").pause();
      } else if (Cookies.get("voice") == "huong-giang") {
        document.getElementById("voice5").pause();
      } else if (Cookies.get("voice") == "duy-phuong") {
        document.getElementById("voice6").pause();
      } else if (Cookies.get("voice") == "lan-trinh") {
        document.getElementById("voice7").pause();
      } else if (Cookies.get("voice") == "thao-trinh") {
        document.getElementById("voice8").pause();
      } else if (Cookies.get("voice") == "trung-kien") {
        document.getElementById("voice9").pause();
      } else if (Cookies.get("voice") == "minh-hoang") {
        document.getElementById("voice10").pause();
      }
    }
  };
  const [message, setMessage] = useState(false);
  const handlMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  return (
    <Analysis>
      <div className="my-audio">
        <audio
          id="voice1"
          src="/media/voice/dang-ngoai/dang-ngoai-HN-ngoc-huyen.wav"
        />
        <audio
          id="voice2"
          src="/media/voice/dang-ngoai/dang-ngoai-HN-phu-thang.wav"
        />
        <audio
          id="voice3"
          src="/media/voice/dang-ngoai/dang-ngoai-HN-thanh-long.wav"
        />
        <audio
          id="voice4"
          src="/media/voice/dang-ngoai/dang-ngoai-HN-mai-phuong.wav"
        />
        <audio
          id="voice5"
          src="/media/voice/dang-ngoai/dang-ngoai-Hue-huong-giang.wav"
        />
        <audio
          id="voice6"
          src="/media/voice/dang-ngoai/dang-ngoai-Hue-duy-phuong.wav"
        />
        <audio
          id="voice7"
          src="/media/voice/dang-ngoai/dang-ngoai-SG-lan-trinh.wav"
        />
        <audio
          id="voice8"
          src="/media/voice/dang-ngoai/dang-ngoai-SG-thao-trinh.wav"
        />
        <audio
          id="voice9"
          src="/media/voice/dang-ngoai/dang-ngoai-SG-trung-kien.wav"
        />
        <audio
          id="voice10"
          src="/media/voice/dang-ngoai/dang-ngoai-SG-minh-hoang.wav"
        />
      </div>
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
            <li className="app-audi" onClick={handlPlayVoice}>
              <i className={pause ? "fas fa-play" : "fas fa-pause"} />
              <span className="analysis-menu-tooltip">Báo Nói</span>
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
            <li className="setting" onClick={handlCloseChangeVoice}>
              <i className="fa fa-sliders" />
              <span className="analysis-menu-tooltip">Chỉnh Giọng Đọc</span>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={showchangevoice ? "changevoice-background" : "hide"}
        onClick={handlCloseChangeVoice}
      ></div>
      <div className={showchangevoice ? "changevoice" : "hide"}>
        <audio id="player1" src="/media/voice/ngoc-huyen-test-voice.wav" />
        <audio id="player2" src="/media/voice/phu-thang-test-voice.wav" />
        <audio id="player3" src="/media/voice/thanh-long-test-voice.wav" />
        <audio id="player4" src="/media/voice/mai-phuong-test-voice.wav" />
        <audio id="player5" src="/media/voice/huong-giang-test-voice.wav" />
        <audio id="player6" src="/media/voice/duy-phuong-test-voice.wav" />
        <audio id="player7" src="/media/voice/lan-trinh-test-voice.wav" />
        <audio id="player8" src="/media/voice/thao-trinh-test-voice.wav" />
        <audio id="player9" src="/media/voice/trung-kien-test-voice.wav" />
        <audio id="player10" src="/media/voice/minh-hoang-test-voice.wav" />
        <p className="changevoice-title">Chọn Giọng Đọc</p>
        <p className="changevoice-sub">
          Hỗ trợ nhiều ngôn ngữ, nhiều đặc trưng cho các lựa chọn của bạn đa
          dạng hơn
        </p>
        <div className="changevoice-main">
          <div
            className={
              Cookies.get("voice") == "ngoc-huyen"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "ngoc-huyen");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/ngoc-huyen.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">HN - Ngọc Huyền</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice1}
            >
              <i
                className={
                  testvoiceplay1
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "phu-thang"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "phu-thang");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/phu-thang.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">HN - Phú Thăng</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice2}
            >
              <i
                className={
                  testvoiceplay2
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "thanh-long"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "thanh-long");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/thanh-long.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">HN - Thanh Long</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice3}
            >
              <i
                className={
                  testvoiceplay3
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "mai-phuong"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "mai-phuong");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/mai-phuong.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">HN - Mai Phương</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice4}
            >
              <i
                className={
                  testvoiceplay4
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "huong-giang"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "huong-giang");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/huong-giang.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">Huế - Hương Giang</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice5}
            >
              <i
                className={
                  testvoiceplay5
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "duy-phuong"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "duy-phuong");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/duy-phuong.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">Huế - Duy Phương</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice6}
            >
              <i
                className={
                  testvoiceplay6
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "lan-trinh"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "lan-trinh");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/lan-trinh.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">SG - Lan Trinh</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice7}
            >
              <i
                className={
                  testvoiceplay7
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "thao-trinh"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "thao-trinh");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/thao-trinh.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">SG - Thảo Trinh</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice8}
            >
              <i
                className={
                  testvoiceplay8
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "trung-kien"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "trung-kien");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/trung-kien.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">SG - Trung Kiên</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice9}
            >
              <i
                className={
                  testvoiceplay9
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
          <div
            className={
              Cookies.get("voice") == "minh-hoang"
                ? "changevoice-main-block chanvoice-active"
                : "changevoice-main-block"
            }
          >
            <div
              className="changevoice-main-block-sass"
              onClick={() => {
                Cookies.set("voice", "minh-hoang");
                handlCloseChangeVoice();
                handlMessage();
              }}
            >
              <div className="changevoice-main-block-img">
                <Image
                  src={`/media/voice/minh-hoang.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="changevoice-main-block-name">SG - Minh Hoàng</p>
            </div>
            <div
              className="changevoice-main-block-btn"
              onClick={handlPlayTestVoice10}
            >
              <i
                className={
                  testvoiceplay10
                    ? "changevoice-main-block-btn-icon fas fa-pause"
                    : "changevoice-main-block-btn-icon fas fa-play"
                }
              />
            </div>
          </div>
        </div>
        <i
          className="changevoice-close fas fa-window-close"
          onClick={handlCloseChangeVoice}
        />
      </div>
      <div className={message ? "messenger-notify" : "hide"}>
        <SucceedMessenger />
      </div>
    </Analysis>
  );
};

export default DangNgoai;
