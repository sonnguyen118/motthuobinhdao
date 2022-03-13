import React from "react";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-text">
        <p className="aboutus-text-title">VỀ CHÚNG TÔI</p>
        <div className="aboutus-text-body">
          <div></div>
          <span className="aboutus-text-body-text">
            Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử giai
            đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án phim 3D
            - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
          </span>
        </div>
      </div>
      <div className="aboutus-image">
        <img src={`/media/abouts.png`} />
      </div>
    </div>
  );
};

export default Aboutus;
