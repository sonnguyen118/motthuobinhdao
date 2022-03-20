import React, { useContext, useState, useEffect } from "react";
import Analysis from "../../index";
import Image from "next/image";
import Link from "next/link";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Kientruc = () => {
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
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài {">"} Kiến Trúc
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1 className="analysis-component_index-header-h1">
              KIẾN TRÚC ĐÀNG NGOÀI
            </h1>
            <h3 className="analysis-component_index-header-h3">
              VUA LÊ - CHÚA TRỊNH
            </h3>
          </div>
          <div className="analysis-component_index-content">
            Kiến trúc Đàng Ngoài thời Lê trung hưng phản ánh các loại hình nghệ
            thuật của nước Đại Việt dưới thời Lê trung hưng trong vùng lãnh thổ
            do chúa Trịnh cai quản (phía bắc sông Gianh), Các kiến trúc từ Cung
            điện, đình đài, nhà dân, đền chùa .... đều phản ánh kiến trúc của
            thời kỳ này. <br></br>
            <br></br>
            Trong hơn 200 năm Đàng Ngoài được cai trị bởi các chúa Trịnh, Kiến
            trúc Đàng Ngoài thể hiện rõ những nét độc đáo
          </div>

          <div className="analysis-component_index-menu">
            <h3 className="analysis-component_index-menu-h3">CÁC BÀI ĐĂNG</h3>
            <div className="analysis-component_index-news">
              <div className="analysis-component_index-news-block">
                <Link href={"/Analysis/dang-ngoai/kien-truc/1"} passHref>
                  <div className="analysis-component_index-news-block-block">
                    <div className="analysis-component_index-news-block-block-title">
                      Kiến Trúc Chùa Keo Lê Trung Hưng (1632)
                    </div>
                    <div className="analysis-component_index-news-block-block-body">
                      <div className="analysis-component_index-news-block-block-body-img">
                        <Image
                          src={`/media/minh-hoa-1.png`}
                          layout="fill"
                          objectFit="contain"
                          alt="description of image"
                        />
                      </div>
                      <div className="analysis-component_index-news-block-block-body-content">
                        <p className="analysis-component_index-news-block-block-body-content-main">
                          Công việc xây dựng ngôi chùa Keo Thượng được bắt đầu
                          từ năm 1630 và hoàn thành vào năm 1632 theo phong cách
                          tiêu biểu của kiến trúc thời Lê ...
                        </p>
                        <p className="analysis-component_index-news-block-block-body-content-sub">
                          Kiến trúc đền chùa Đàng Ngoài
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-component_index-news">
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-component_index-news">
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-component_index-news">
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="analysis-component_index-news-block">
                <div className="analysis-component_index-news-block-block">
                  <div className="analysis-component_index-news-block-block-title">
                    Danh sách các vị quân chủ Đàng Ngoài
                  </div>
                  <div className="analysis-component_index-news-block-block-body">
                    <div className="analysis-component_index-news-block-block-body-img">
                      <Image
                        src={`/media/minh-hoa-1.png`}
                        layout="fill"
                        objectFit="contain"
                        alt="description of image"
                      />
                    </div>
                    <div className="analysis-component_index-news-block-block-body-content">
                      <p className="analysis-component_index-news-block-block-body-content-main">
                        o quân ra Bắc tiêu diệt thế lực họ Trịnh, đất nước tái
                        thống nhất dưới triều Lê trên danh nghĩa tr Nghệ thuật
                        Đàng Ngoài thời Lê trung hưng phản ánh các loại hình
                        nghệ . . .
                      </p>
                      <p className="analysis-component_index-news-block-block-body-content-sub">
                        Danh sách các vị quân chủ Đàng Ngoài
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analysis-component_index-pagination">
              <ul className="pagination" role="menubar" aria-label="Pagination">
                <li>
                  <a href="">
                    <span>First</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Previous</span>
                  </a>
                </li>
                <li className="current">
                  <a href="">1</a>
                </li>
                <li>
                  <a href="">2</a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
                <li>
                  <a href="">4</a>
                </li>
                <li>
                  <a href="">5</a>
                </li>
                <li>
                  <a href="">6</a>
                </li>
                <li>
                  <a href="">7</a>
                </li>
                <li>
                  <a href="">8</a>
                </li>
                <li>
                  <a href="">9</a>
                </li>
                <li>
                  <a href="">10</a>
                </li>
                <li>
                  <a href="">
                    <span>Next</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Last</span>
                  </a>
                </li>
              </ul>
            </div>
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
                    src={`/media/dang-ngoai-kien-truc-men.wav`}
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
                    src={`/media/dang-ngoai-kien-truc-women.wav`}
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

export default Kientruc;
