import React from "react";
import Analysis from "../index";
import Image from "next/image";
const DangNgoai = () => {
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1 className="analysis-component_index-header-h1">ĐÀNG NGOÀI</h1>
            <h3 className="analysis-component_index-header-h3">
              VUA LÊ - CHÚA TRỊNH
            </h3>
          </div>
          <div className="analysis-component_index-content">
            Đàng Ngoài (sử liệu chữ Hán: 北河 Bắc Hà) hay An Nam (chữ Hán:
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
    </Analysis>
  );
};

export default DangNgoai;
