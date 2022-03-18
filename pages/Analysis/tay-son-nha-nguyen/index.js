import React from "react";
import Analysis from "../index";
import Image from "next/image";
const DangNgoai = () => {
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Tây Sơn - Tiền Nguyễn
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1 className="analysis-component_index-header-h1">
              TÂY SƠN - TIỀN NGUYỄN
            </h1>
            <h3 className="analysis-component_index-header-h3">
              QUANG TRUNG - GIA LONG
            </h3>
          </div>
          <div className="analysis-component_index-content">
            Nhà Tây Sơn chữ Nôm: 家西山, chữ Hán: 西山朝 / Tây Sơn triều là một
            triều đại quân chủ trong lịch sử Việt Nam tồn tại từ năm 1778 đến
            năm 1802, được thành lập trong bối cảnh tranh chấp quyền lực cuối
            thời Lê Trung hưng 1533 - 1789. Theo cách gọi của phần lớn sử gia,
            nhất là các sử gia hiện đại tại Việt Nam thì nhà Tây Sơn được dùng
            để gọi triều đại của anh em Nguyễn Nhạc, Nguyễn Lữ và Nguyễn Huệ để
            phân biệt với nhà Nguyễn của Nguyễn Ánh vì cùng họ Nguyễn. Ngoài ra,
            Tây Sơn cũng chỉ các lãnh tụ và quân đội khởi nghĩa xuất thân từ ấp
            Tây Sơn; cũng được dùng làm tên cuộc chiến của Tây Sơn.
            <br></br>
            <br></br>
            Nhà Nguyễn chữ Nôm: 茹阮, chữ Hán: 阮朝; Hán-Việt: Nguyễn triều là
            triều đại quân chủ cuối cùng trong lịch sử Việt Nam. Nhà Nguyễn được
            thành lập sau khi Nguyễn Ánh Gia Long lên ngôi hoàng đế năm 1802 và
            kết thúc khi Bảo Đại thoái vị vào năm 1945, tổng cộng là 143 năm.
            Triều Nguyễn là một triều đại đánh dấu nhiều thăng trầm trong lịch
            sử Việt Nam, đặc biệt là cuộc xâm lược của người Pháp giữa thế kỷ
            19.
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

export default DangNgoai;
