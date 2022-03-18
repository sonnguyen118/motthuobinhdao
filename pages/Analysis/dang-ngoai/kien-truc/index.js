import React from "react";
import Analysis from "../../index";
import Image from "next/image";
import Link from "next/link";

const Kientruc = () => {
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
            Nghệ thuật Đàng Ngoài thời Lê trung hưng phản ánh các loại hình nghệ
            thuật của nước Đại Việt dưới thời Lê trung hưng trong vùng lãnh thổ
            do chúa Trịnh cai quản (phía bắc sông Gianh), chủ yếu trên lĩnh vực
            kiến trúc, điêu khắc, âm nhạc và hội họa.. <br></br>
            <br></br>
            Đến năm 1786 khi Nguyễn Huệ kéo quân ra Bắc tiêu diệt thế lực họ
            Trịnh, đất nước tái thống nhất dưới triều Lê trên danh nghĩa trong
            một thời gian ngắn
          </div>

          <div className="analysis-component_index-menu">
            <h3 className="analysis-component_index-menu-h3">CÁC BÀI ĐĂNG</h3>
            <div className="analysis-component_index-news">
              <div className="analysis-component_index-news-block">
                <Link href={"/Analysis/dang-ngoai/kien-truc/1"} passHref>
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
        <div className="analysis-component_list">
          <div className="analysis-component_list-block">
            <div className="analysis-component_list-block-title">
              <p className="analysis-component_list-block-title-text">
                BÀI ĐĂNG MỚI
              </p>
              <div className="analysis-component_list-block-title-wall"></div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="analysis-component_list-block">
            <div className="analysis-component_list-block-title">
              <p className="analysis-component_list-block-title-text">
                BÀI ĐĂNG MỚI
              </p>
              <div className="analysis-component_list-block-title-wall"></div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
            <div className="analysis-component_list-block-main">
              <div className="analysis-component_list-block-main-content">
                <div className="analysis-component_list-block-main-content-img">
                  <Image
                    src={`/media/new_dangngoai_1.png`}
                    layout="fill"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="analysis-component_list-block-main-content-title">
                  <p className="analysis-component_list-block-main-content-title-header">
                    Danh Sách Các Vị Quân Chủ Đàng Ngoài
                  </p>
                  <p className="analysis-component_list-block-main-content-title-text">
                    Danh sách các Vua Lê Trung Hưng và Chúa Trịnh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Analysis>
  );
};

export default Kientruc;
