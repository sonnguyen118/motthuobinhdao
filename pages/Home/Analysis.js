import React from "react";
import Image from "next/image";

const Analysis = () => {
  return (
    <div className="home-analysis">
      <h1 className="home-analysis-title">CÁC NGHIÊN CỨU</h1>
      <div className="home-analysis-body">
        <div id="home-analysis-body-slideshow">
          <div className="home-analysis-body-slide-wrapper">
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">1</h1>
            </div>
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">2</h1>
            </div>
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">3</h1>
            </div>
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">4</h1>
            </div>
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">5</h1>
            </div>
            <div className="home-analysis-body-slide">
              <h1 className="home-analysis-body-slide-number">6</h1>
            </div>
          </div>
        </div>
        <div className="home-analysis-body-list">
          <div className="home-analysis-body-list-title">
            <div className="home-analysis-body-list-title-span">
              CÁC BÀI ĐĂNG MỚI NHẤT
            </div>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
