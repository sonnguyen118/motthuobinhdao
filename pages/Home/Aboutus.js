import React from "react";
import Image from "next/image";
import SlideShow_AboutUs from "./SlideShow_AboutUs";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-text">
        <p className="aboutus-text-title">VỀ CHÚNG TÔI</p>
        <div className="aboutus-text-body">
          <div></div>
          <p className="aboutus-text-body-text">
            Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử giai
            đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án phim 3D
            - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
          </p>
          <p className="aboutus-text-body-text">
            Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử giai
            đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án phim 3D
            - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
          </p>
          <p className="aboutus-text-body-text">
            Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử giai
            đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án phim 3D
            - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
          </p>
          <p className="aboutus-text-body-text">
            Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử giai
            đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án phim 3D
            - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
          </p>
        </div>
      </div>
      <div className="aboutus-image">
        <SlideShow_AboutUs />
      </div>
    </div>
  );
};

export default Aboutus;
