import React from "react";
import Image from "next/image";

const Block = () => {
  return (
    <div>
      <div className="home__block-2">
        <div className="home__block-2-Image">
          <Image
            className="home__block-2-Image"
            src={`/media/block_1.jpg`}
            width={360}
            height={540}
            alt="description of image"
          />
        </div>
        <div className="home__block-2-title">
          <h1 className="home__block-2-title-h1">
            DỰ ÁN PHIM 3D CỔ TRANG VIỆT NAM
          </h1>
          <p className="home__block-2-title-span">
            Dự án Criti Studio đang phối hợp cùng các đối tác - chuyên gia sử
            học tạo dựng phim 3D - mô tả lịch sử 300 năm nội chiến Việt Nam từ
            thời Mạc (1530) đến đầu thời Nguyễn (1802). Đây là một trong những
            khoảng thời gian đầy biến động của lịch sử nước ta khi lòng người
            thay đổi, kẻ mạnh quyền định đoạt số phận, chiến sự xảy ra liên
            miên, đất nước chia cắt. Cũng là đặt nền móng cho bản đồ hình chữ S
            của Việt Nam. Thời gian thì đã xóa mờ các cuộc chiến nhưng tên tuổi
            các vị anh hùng sẽ còn mãi, họ xứng đá để chúng ta mãi mãi khắc ghi.{" "}
          </p>
          <p className="home__block-2-title-span">
            Dự Án bắt khởi động từ 14/02/2022, dự kiến tháng 6/2022 sẽ có
            trailer mới nhất
          </p>

          <button className="home__block-2-title-button">
            <a href="/films" className="home__block-2-title-button-text">
              Tham Gia Tìm Hiểu & Ủng Hộ Dự Án
            </a>
          </button>
        </div>
      </div>
      <div className="home__block-3">
        <div className="home__block-3-title">
          <h1 className="home__block-3-title-h1">TEXTURE CHÂN THỰC</h1>
          <p className="home__block-3-title-span">
            Texture Được dịch từ tiếng Anh-Trong nghệ thuật thị giác, kết cấu là
            chất lượng bề mặt cảm nhận của một tác phẩm nghệ thuật. Nó là một
            yếu tố của thiết kế hai chiều và ba chiều và được phân biệt bởi các
            đặc tính hình ảnh và vật lý nhận thức của nó.
          </p>
          <button className="home__block-3-title-button">
            <a href="/technology" className="home__block-2-title-button-text">
              Tìm Hiểu Thêm Thông Tin Về Công nghệ
            </a>
          </button>
        </div>

        <div className="home__block-3-Image">
          <Image
            className="home__block-3-Image"
            src={`/media/block_2.png`}
            width={600}
            height={600}
            alt="description of image"
          />
        </div>
      </div>
    </div>
  );
};

export default Block;
