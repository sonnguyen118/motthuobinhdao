import React from "react";
import Analysis from "../index";
import Image from "next/image";
const DangNgoai = () => {
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Nhà Mạc
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1 className="analysis-component_index-header-h1">NHÀ MẠC</h1>
            <h3 className="analysis-component_index-header-h3">
              NAM BẮC TRIỀU
            </h3>
          </div>
          <div className="analysis-component_index-content">
            Nhà Mạc (chữ Hán: 莫朝 / Mạc triều) là triều đại quân chủ trong lịch
            sử Việt Nam, bắt đầu khi Mạc Đăng Dung, sau khi dẹp được các bè phái
            trong cung đình, đã ép vua Lê Cung Hoàng nhà Hậu Lê nhường ngôi
            tháng 6 năm 1527 và chấm dứt khi vua Mạc Mậu Hợp lập con trai là Mạc
            Toàn lên ngôi, bị quân đội Lê-Trịnh do Trịnh Tùng chỉ huy đánh bại
            vào cuối năm 1592 – Sau đó Mạc Toàn lên ngôi nhưng tại vị chỉ được 2
            tháng, tổng cộng thời gian tồn tại chính thức của triều đại là gần
            66 năm. Tuy nhiên, giai đoạn sau đó hậu duệ nhà Mạc như Mạc Kính
            Chỉ, Mạc Kính Cung, Mạc Kính Khoan, Mạc Kính Vũ vẫn còn tiếp tục
            chống lại nhà Hậu Lê thời kỳ trung hưng đến tận năm 1677[1] tại khu
            vực Cao Bằng.
            <br></br>
            <br></br>
            Thời kỳ 1533-1592 trong lịch sử Việt Nam còn được gọi là thời kỳ
            Nam-Bắc triều, do chính quyền nhà Mạc chỉ thực sự có quyền lực từ
            địa phận Ninh Bình ngày nay trở ra, còn từ Thanh Hóa trở vào là thế
            lực lấy danh nghĩa gây dựng lại nhà Lê từ năm 1533.
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
