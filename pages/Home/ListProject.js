import React from "react";
import Image from "next/image";

const ListProject = () => {
  return (
    <div className="home-listproduct-div">
      <h1 className="home-listproduct-div-title">CÁC DỰ ÁN</h1>
      <div className="row">
        <div className="col-md ">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <div className="pic-1">
                  <Image
                    className="pic-1"
                    src={`/media/project_1.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
                <div className="pic-2">
                  <Image
                    className="pic-2"
                    src={`/media/project_2.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
              </a>
              <span className="product-hot-label project-active">
                Dự Án Đang triển khai
              </span>
              <ul className="product-links">
                <li>
                  <a href="#" data-tip="Xem Thông Tin Nghiên Cứu Của Dự Án">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Đi Tới Dự Án">
                    <i className="fa fa-random"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Tìm Hiểu Tiến Độ Dự Án">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-content">
              <a className="add-to-cart" href="#">
                Phim 3D cổ trang theo season
              </a>
              <h3 className="title">
                <a href="#">TRUNG HƯNG LIỆT TRUYỆN</a>
              </h3>
              <div className="price">Phim 3D</div>
            </div>
          </div>
        </div>
        <div className="col-md ">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <div className="pic-1">
                  <Image
                    className="pic-1"
                    src={`/media/project_3.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
                <div className="pic-2">
                  <Image
                    className="pic-2"
                    src={`/media/project_4.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
              </a>
              <span className="product-hot-label project-not-active">
                Dự Án Chưa Triển Khai
              </span>
              <ul className="product-links">
                <li>
                  <a href="#" data-tip="Xem Thông Tin Nghiên Cứu Của Dự Án">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Đi Tới Dự Án">
                    <i className="fa fa-random"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Tìm Hiểu Tiến Độ Dự Án">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-content">
              <a className="add-to-cart" href="#">
                Phim 2D cổ trang
              </a>
              <h3 className="title">
                <a href="#">Phim 2D Anime</a>
              </h3>
              <div className="price">Phim 2D</div>
            </div>
          </div>
        </div>
        <div className="col-md ">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <div className="pic-1">
                  <Image
                    className="pic-1"
                    src={`/media/project_5.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
                <div className="pic-2">
                  <Image
                    className="pic-2"
                    src={`/media/project_6.png`}
                    width={400}
                    height={480}
                    alt="description of image"
                  />
                </div>
              </a>
              <span className="product-hot-label project-not-active">
                Dự Án Chưa Triển Khai
              </span>
              <ul className="product-links">
                <li>
                  <a href="#" data-tip="Xem Thông Tin Nghiên Cứu Của Dự Án">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Đi Tới Dự Án">
                    <i className="fa fa-random"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Tìm Hiểu Tiến Độ Dự Án">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-content">
              <a className="add-to-cart" href="#">
                Game 2D trên nền tảng CH Play & AppStore
              </a>
              <h3 className="title">
                <a href="#">Game Mobile</a>
              </h3>
              <div className="price">Game</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProject;
