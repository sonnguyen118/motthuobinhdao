import React, { useContext, useState, useEffect } from "react";
import Analysis from "../../index";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";

const List = () => {
  const [pause, setPause] = useState(true);
  const [voice, setVoice] = useState(true);

  const [colapp1, setColapp1] = useState(true);
  const [colapp2, setColapp2] = useState(true);
  const [colapp3, setColapp3] = useState(true);
  const [colapp4, setColapp4] = useState(true);
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
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài {">"} Kiến Trúc {">"} Chùa Keo
          Kiến Trúc Cổ
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
              CHÙA KEO KIẾN TRÚC CỔ
            </h1>
            <h3
              className={
                color2
                  ? "analysis-component_index-header-h3 white-text"
                  : "analysis-component_index-header-h3"
              }
            >
              KIẾN TRÚC ĐÀNG NGOÀI
            </h3>
            <p
              className={
                color2
                  ? "analysis-component_index-header-p white-text"
                  : "analysis-component_index-header-p"
              }
            >
              Thứ Sáu, ngày 18/03/2022 17:44 PM - GMT+7
            </p>
          </div>
          <div className="news">
            <div className="news-title">
              <div onClick={Collapse1}>
                <i
                  className={
                    colapp1
                      ? "news-title-icon fas fa-angle-down"
                      : "news-title-icon fas fa-angle-right"
                  }
                ></i>
              </div>
              <p
                className={color2 ? "news-title-p white-text" : "news-title-p"}
              >
                Lịch Sử
              </p>
            </div>
            <div className={colapp1 ? "news-content" : "hide"}>
              <div className="news-content_text">
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Sau gần 500 năm tồn tại, năm 1611, nước sông Hồng lên to, làm
                  ngập làng Giao Thủy, nơi có chùa. Một bộ phận dân cư dời đi
                  nơi khác, lập thành làng Hành Thiện, xây dựng nên ngôi chùa
                  Keo mới, thường được gọi là chùa Keo Dưới Keo Hạ hay chùa Keo
                  Hành Thiện - nay ở xã Xuân Hồng, huyện Xuân Trường, Nam Định.
                  Một bộ phận dân cư dời sang tả ngạn sông Hồng, lập làng Dũng
                  Nhuệ trên đất Thái Bình và cũng dựng lên một ngôi chùa, gọi là
                  chùa Keo Trên -Keo Thượng.
                </p>
                <br></br>
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Theo văn bia chùa Keo thì chùa do một vị quan lớn thời
                  Lê-Trịnh đứng ra khởi công xây dựng lại, đó là Quận công Hoàng
                  Nhân Dũng ở làng Tứ Quán, phủ Hải Thanh. Lúc bấy giờ đang có
                  cuộc nội chiến Trịnh-Nguyễn nên chúa Trịnh chỉ cấp cho nhà
                  chùa 100 cây gỗ lim còn tất cả vật liệu khác đều do nhân dân
                  tự đóng góp. Vì vậy, vị Quận công đã phải mất 19 năm vận động
                  quyên góp 1611-1630. Đến tháng 7/1630, ông đã mời được 42 hiệp
                  thợ và khởi công xây dựng. Trong vòng 28 tháng, toàn bộ công
                  trình đã được khánh thành 11/1632. Văn bia chùa Keo còn ghi
                  lại diện tích chùa rộng khoảng 58.000m2, gồm nhiều cụm kiến
                  trúc khác nhau. Chùa Keo Thượng mang đậm phong cách kiến trúc
                  thời Lê, phỏng theo kiến trúc chùa Keo Hành Thiện. Chùa được
                  trùng tu nhiều lần, vào các năm 1689, 1707, 1941.
                </p>
              </div>
              <div className="news-content_block">
                <div
                  className={
                    color2
                      ? "news-content_block-title white-text"
                      : "news-content_block-title"
                  }
                >
                  Chùa Keo
                </div>
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-4.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Quần thể Chùa Keo từ trên cao
                  </div>
                </div>
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-3.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Gác Chuông biểu tượng của chùa Keo
                  </div>
                </div>
              </div>
            </div>

            <div className="news-title">
              <div onClick={Collapse2}>
                <i
                  className={
                    colapp1
                      ? "news-title-icon fas fa-angle-down"
                      : "news-title-icon fas fa-angle-right"
                  }
                ></i>
              </div>
              <p
                className={color2 ? "news-title-p white-text" : "news-title-p"}
              >
                Lịch Sử
              </p>
            </div>
            <div className={colapp2 ? "news-content" : "hide"}>
              <div className="news-content_text">
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Sau gần 500 năm tồn tại, năm 1611, nước sông Hồng lên to, làm
                  ngập làng Giao Thủy, nơi có chùa. Một bộ phận dân cư dời đi
                  nơi khác, lập thành làng Hành Thiện, xây dựng nên ngôi chùa
                  Keo mới, thường được gọi là chùa Keo Dưới Keo Hạ hay chùa Keo
                  Hành Thiện - nay ở xã Xuân Hồng, huyện Xuân Trường, Nam Định.
                  Một bộ phận dân cư dời sang tả ngạn sông Hồng, lập làng Dũng
                  Nhuệ trên đất Thái Bình và cũng dựng lên một ngôi chùa, gọi là
                  chùa Keo Trên -Keo Thượng.
                </p>
                <br></br>
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Theo văn bia chùa Keo thì chùa do một vị quan lớn thời
                  Lê-Trịnh đứng ra khởi công xây dựng lại, đó là Quận công Hoàng
                  Nhân Dũng ở làng Tứ Quán, phủ Hải Thanh. Lúc bấy giờ đang có
                  cuộc nội chiến Trịnh-Nguyễn nên chúa Trịnh chỉ cấp cho nhà
                  chùa 100 cây gỗ lim còn tất cả vật liệu khác đều do nhân dân
                  tự đóng góp. Vì vậy, vị Quận công đã phải mất 19 năm vận động
                  quyên góp 1611-1630. Đến tháng 7/1630, ông đã mời được 42 hiệp
                  thợ và khởi công xây dựng. Trong vòng 28 tháng, toàn bộ công
                  trình đã được khánh thành 11/1632. Văn bia chùa Keo còn ghi
                  lại diện tích chùa rộng khoảng 58.000m2, gồm nhiều cụm kiến
                  trúc khác nhau. Chùa Keo Thượng mang đậm phong cách kiến trúc
                  thời Lê, phỏng theo kiến trúc chùa Keo Hành Thiện. Chùa được
                  trùng tu nhiều lần, vào các năm 1689, 1707, 1941.
                </p>
              </div>
              <div className="news-content_block">
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-4.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Quần thể Chùa Keo từ trên cao
                  </div>
                </div>
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-3.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Gác Chuông biểu tượng của chùa Keo
                  </div>
                </div>
              </div>
            </div>

            <div className="news-title">
              <div onClick={Collapse3}>
                <i
                  className={
                    colapp1
                      ? "news-title-icon fas fa-angle-down"
                      : "news-title-icon fas fa-angle-right"
                  }
                ></i>
              </div>
              <p
                className={color2 ? "news-title-p white-text" : "news-title-p"}
              >
                Lịch Sử
              </p>
            </div>
            <div className={colapp3 ? "news-content" : "hide"}>
              <div className="news-content_text">
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Sau gần 500 năm tồn tại, năm 1611, nước sông Hồng lên to, làm
                  ngập làng Giao Thủy, nơi có chùa. Một bộ phận dân cư dời đi
                  nơi khác, lập thành làng Hành Thiện, xây dựng nên ngôi chùa
                  Keo mới, thường được gọi là chùa Keo Dưới Keo Hạ hay chùa Keo
                  Hành Thiện - nay ở xã Xuân Hồng, huyện Xuân Trường, Nam Định.
                  Một bộ phận dân cư dời sang tả ngạn sông Hồng, lập làng Dũng
                  Nhuệ trên đất Thái Bình và cũng dựng lên một ngôi chùa, gọi là
                  chùa Keo Trên -Keo Thượng.
                </p>
                <br></br>
                <p
                  className={
                    color2
                      ? "news-content_text-p white-text"
                      : "news-content_text-p"
                  }
                >
                  Theo văn bia chùa Keo thì chùa do một vị quan lớn thời
                  Lê-Trịnh đứng ra khởi công xây dựng lại, đó là Quận công Hoàng
                  Nhân Dũng ở làng Tứ Quán, phủ Hải Thanh. Lúc bấy giờ đang có
                  cuộc nội chiến Trịnh-Nguyễn nên chúa Trịnh chỉ cấp cho nhà
                  chùa 100 cây gỗ lim còn tất cả vật liệu khác đều do nhân dân
                  tự đóng góp. Vì vậy, vị Quận công đã phải mất 19 năm vận động
                  quyên góp 1611-1630. Đến tháng 7/1630, ông đã mời được 42 hiệp
                  thợ và khởi công xây dựng. Trong vòng 28 tháng, toàn bộ công
                  trình đã được khánh thành 11/1632. Văn bia chùa Keo còn ghi
                  lại diện tích chùa rộng khoảng 58.000m2, gồm nhiều cụm kiến
                  trúc khác nhau. Chùa Keo Thượng mang đậm phong cách kiến trúc
                  thời Lê, phỏng theo kiến trúc chùa Keo Hành Thiện. Chùa được
                  trùng tu nhiều lần, vào các năm 1689, 1707, 1941.
                </p>
              </div>
              <div className="news-content_block">
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-4.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Quần thể Chùa Keo từ trên cao
                  </div>
                </div>
                <div>
                  <div className="news-content_block-image">
                    <Image
                      src={`/media/chua-keo-3.jpg`}
                      layout="fill"
                      objectFit="contain"
                      alt="description of image"
                    />
                  </div>
                  <div
                    className={
                      color2
                        ? "news-content_block-subimage white-text"
                        : "news-content_block-subimage"
                    }
                  >
                    Gác Chuông biểu tượng của chùa Keo
                  </div>
                </div>
              </div>
            </div>

            <div className="news-title">
              <div>
                <i className="news-title-icon fas fa-angle-down"></i>
              </div>
              <p
                className={color2 ? "news-title-p white-text" : "news-title-p"}
              >
                Các Nguồn Tham Khảo
              </p>
            </div>
            <div className="news-content">
              <ol className="news-content-ol">
                <li className="news-content-ol-li">
                  <a
                    className="news-content-ol-li-a"
                    href="https://vi.wikipedia.org/wiki/Ch%C3%B9a_Keo_(Th%C3%A1i_B%C3%ACnh)"
                  >
                    Wikipedia Chùa Keo
                  </a>
                </li>
                <li className="news-content-ol-li">
                  <a
                    className="news-content-ol-li-a"
                    href="http://vietlandmarks.com/module/groups/action/viewimages/id/212/album/509#509"
                  >
                    Vietnam Landmarks - Chùa Keo - Vũ Thư,Thái Bình,Việt Nam
                  </a>
                </li>
                <li className="news-content-ol-li">
                  <a
                    className="news-content-ol-li-a"
                    href="http://bmktcn.com/index.php?option=com_content&task=view&id=5517&Itemid=153"
                  >
                    BMKTCN - ĐHXD - Chùa Keo, Vũ Thư, Thái Bình, Việt Nam
                  </a>
                </li>
                <li className="news-content-ol-li">
                  <a
                    className="news-content-ol-li-a"
                    href="https://khanhhoathuynga.wordpress.com/2009/07/01/c%E1%BA%A5u-truc-ki%E1%BA%BFn-truc-c%E1%BB%95-vi%E1%BB%87t-nam/"
                  >
                    Cấu trúc kiến trúc cổ Việt Nam | Khanhhoathuyngas collection
                    Blog
                  </a>
                </li>
                <li className="news-content-ol-li">
                  <a
                    className="news-content-ol-li-a"
                    href="https://thaibinh.gov.vn/130namthanhlaptinh/van-hoa-du-lich/niem-tu-hao-cua-thai-binh.html"
                  >
                    Niềm tự hào của Thái Bình
                  </a>
                </li>
              </ol>
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
                    autoPlayAfterSrcChange={false}
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
    </Analysis>
  );
};

export default List;
