import React from "react";
import Image from "next/image";

const Analysis = () => {
  return (
    <div className="home-analysis">
      <h1 className="home-analysis-title">CÁC NGHIÊN CỨU</h1>
      <div className="home-analysis-body">
        <div className="home-analysis-body-slideshow">
          <div data-am-fadeshow="next-prev-navigation">
            {/* Radio */}
            <input type="radio" name="css-fadeshow" id="slide-1" />
            <input type="radio" name="css-fadeshow" id="slide-2" />
            <input type="radio" name="css-fadeshow" id="slide-3" />
            {/* Slides */}
            <div className="fs-slides">
              <div
                className="fs-slide"
                style={{
                  backgroundImage: "url(/media/new_slide_index_1.png)",
                }}
              >
                {/* Add content to images (sample) */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    textShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <h1
                    style={{
                      marginTop: 0,
                      marginBottom: "0.8vw",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
                    Ấn Tín Các Triều Đại
                  </h1>
                  <p
                    style={{ fontSize: "14px", fontWeight: 100, marginTop: 0 }}
                  >
                    Hệ thống ấn tín, các sử dụng qua các triều Mạc, Lê Trung
                    Hưng, Tây Sơn - đầu Nguyễn
                  </p>
                </div>
              </div>
              <div
                className="fs-slide"
                style={{
                  backgroundImage: "url(/media/abouts-4.png)",
                }}
              >
                {/* Add content to images (sample) */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    textShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <h1
                    style={{
                      marginTop: 0,
                      marginBottom: "0.8vw",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
                    Thiết Kế Chi Tiết Nhân Vật
                  </h1>
                  <p
                    style={{ fontSize: "14px", fontWeight: 100, marginTop: 0 }}
                  >
                    Chúng tôi sử dụng các phần mềm để dễ dàng tạo các model
                  </p>
                </div>
              </div>
              <div
                className="fs-slide"
                style={{
                  backgroundImage: "url(/media/abouts-5.png)",
                }}
              >
                {/* Add content to images (sample) */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    textShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <h1
                    style={{
                      marginTop: 0,
                      marginBottom: "0.8vw",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
                    Texture Chân Thực
                  </h1>
                  <p
                    style={{ fontSize: "14px", fontWeight: 100, marginTop: 0 }}
                  >
                    Chúng tôi sử dụng các phần mềm để dễ dàng tạo các model
                  </p>
                </div>
              </div>
            </div>
            {/* Quick Navigation */}
            <div className="fs-quick-nav">
              <label className="fs-quick-btn" htmlFor="slide-1" />
              <label className="fs-quick-btn" htmlFor="slide-2" />
              <label className="fs-quick-btn" htmlFor="slide-3" />
            </div>
            {/* Prev Navigation */}
            <div className="fs-prev-nav">
              <label className="fs-prev-btn" htmlFor="slide-1" />
              <label className="fs-prev-btn" htmlFor="slide-2" />
              <label className="fs-prev-btn" htmlFor="slide-3" />
            </div>
            {/* Next Navigation */}
            <div className="fs-next-nav">
              <label className="fs-next-btn" htmlFor="slide-1" />
              <label className="fs-next-btn" htmlFor="slide-2" />
              <label className="fs-next-btn" htmlFor="slide-3" />
            </div>
          </div>
        </div>
        <div className="home-analysis-body-list">
          <div className="home-analysis-body-list-title">
            <div className="home-analysis-body-list-title-span">
              CÁC BÀI ĐĂNG MỚI NHẤT
            </div>
            <div className="home-analysis-body-list-title-wall"></div>
          </div>
          <div className="home-analysis-body-list-body">
            <ul className="no-padding">
              <li className="home-analysis-body-list-body-item">
                <div className="home-analysis-body-list-body-item-img">
                  <Image
                    src={`/media/img_list_news_1.jpg`}
                    width={250}
                    height={140}
                    alt="description of image"
                  />
                </div>
                <div className="home-analysis-body-list-body-item-content">
                  <p className="home-analysis-body-list-body-item-content_1">
                    Ấn Tín Các Triều Đại
                  </p>
                  <p className="home-analysis-body-list-body-item-content_2">
                    Hệ thống ấn tín, các sử dụng qua các triều Mạc, Lê Trung
                    Hưng, Tây Sơn - đầu Nguyễn
                  </p>
                </div>
              </li>
              <li className="home-analysis-body-list-body-item">
                <div className="home-analysis-body-list-body-item-img">
                  <Image
                    src={`/media/img_list_news_2.jpg`}
                    width={250}
                    height={140}
                    alt="description of image"
                  />
                </div>
                <div className="home-analysis-body-list-body-item-content">
                  <p className="home-analysis-body-list-body-item-content_1">
                    Ấn Tín Các Triều Đại
                  </p>
                  <p className="home-analysis-body-list-body-item-content_2">
                    Hệ thống ấn tín, các sử dụng qua các triều Mạc, Lê Trung
                    Hưng, Tây Sơn - đầu Nguyễn
                  </p>
                </div>
              </li>
              <li className="home-analysis-body-list-body-item">
                <div className="home-analysis-body-list-body-item-img">
                  <Image
                    src={`/media/img_list_news_3.jpg`}
                    width={250}
                    height={140}
                    alt="description of image"
                  />
                </div>
                <div className="home-analysis-body-list-body-item-content">
                  <p className="home-analysis-body-list-body-item-content_1">
                    Ấn Tín Các Triều Đại
                  </p>
                  <p className="home-analysis-body-list-body-item-content_2">
                    Hệ thống ấn tín, các sử dụng qua các triều Mạc, Lê Trung
                    Hưng, Tây Sơn - đầu Nguyễn
                  </p>
                </div>
              </li>
              <li className="home-analysis-body-list-body-item">
                <div className="home-analysis-body-list-body-item-img">
                  <Image
                    src={`/media/img_list_news_3.jpg`}
                    width={250}
                    height={140}
                    alt="description of image"
                  />
                </div>
                <div className="home-analysis-body-list-body-item-content">
                  <p className="home-analysis-body-list-body-item-content_1">
                    Ấn Tín Các Triều Đại
                  </p>
                  <p className="home-analysis-body-list-body-item-content_2">
                    Hệ thống ấn tín, các sử dụng qua các triều Mạc, Lê Trung
                    Hưng, Tây Sơn - đầu Nguyễn
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
