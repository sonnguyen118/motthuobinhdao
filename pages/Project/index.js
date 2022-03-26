import React, { useContext, useState, useEffect, useCallback } from "react";
import Layout from "../Components/Layout";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Project = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <Layout>
      <div className="project">
        <div className="project-block1"></div>
        <div className="project-block2">
          <div className="project-block2-intro">
            <h2 className="project-block2-intro-title">GIỚI THIỆU DỰ ÁN</h2>
            <p className="project-block2-intro-body">
              Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử
              giai đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án
              phim 3D - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
              <br></br>
              Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử
              giai đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án
              phim 3D - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
              <br></br>
              Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử
              giai đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án
              phim 3D - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
              <br></br>
              Một Thuở Binh Đao là một đội ngũ nghiên cứu chuyên sâu lịch sử
              giai đoạn Lê Trung Hưng (1530 - 1802), Chúng tôi ra mắt các dự án
              phim 3D - 2D - game tiêu biểu cho văn hóa, phong tục giai đoạn này
            </p>
          </div>
          <div className="project-block2-compare">
            <ReactCompareSlider
              {...props}
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backdropFilter: undefined,
                    background: "white",
                    border: 0,
                    color: "#333",
                  }}
                />
              }
              itemOne={
                <ReactCompareSliderImage
                  src="/media/project/slide-baner-mobile-4.png"
                  style={{ filter: "grayscale(1)" }}
                  alt="one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/media/project/slide-baner-mobile-5.png"
                  alt="two"
                />
              }
              onPositionChange={handlePositionChange}
              style={{
                display: "flex",
                width: "100%",
                height: "50vh",
                ...style,
              }}
            />
          </div>
        </div>
        <div className="project-block3">
          <h2 className="project-block3-title">Concept Art Gallery</h2>
          <div>
            <div className="accordion">
              <ul>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>SIGHTSEEING</h2>
                      <p>Explore Scottsdale - Beyond</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>Dining</h2>
                      <p>Eat Like a Local</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>OUTDOORS</h2>
                      <p>Seek Adventure</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>Accommodations</h2>
                      <p>Stay a While</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>Golf</h2>
                      <p>Tee it Up</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>Nightlife</h2>
                      <p>Play After Dark</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>ART + CULTURE</h2>
                      <p>Find Your Muse</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href={"#"}
                      target="_blank"
                      className="sliderLink"
                      rel="noreferrer"
                    >
                      <h2>Spa &amp; wellness</h2>
                      <p>Relax and Unwind</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-block4">
          <h2 className="project-block4-title">ĐỐI TÁC</h2>
          <p className="project-block4-sub">
            Dự án rất may mắn được hợp tác với những đối tác tâm huyết và chất
            lượng hàng đầu Việt Nam trong mỗi lĩnh vực:
          </p>
          <div className="project-block4-main">
            <div className="project-block4-main-company">
              <div className="project-block4-main-company-logo">
                <Image
                  src={`/media/project/logo-criti.png`}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              <p className="project-block4-main-company-title">CRITI STUDIO</p>
              <p className="project-block4-main-company-sub">
                Thiết kế Model và dựng phim
              </p>
            </div>
            <div className="project-block4-main-quocte">
              <div className="blockquote-wrapper">
                <div className="blockquote">
                  <h1>
                    Để làm một dự án lớn thì{" "}
                    <span style={{ color: "#ccc" }}>quyết tâm và nghị lực</span>{" "}
                    là không đủ mà chúng ta cần{" "}
                    <span style={{ color: "#ccc" }}>sự may mắn. </span>
                    Hy vọng may mắn đến với chúng tôi và đến với dự án.
                  </h1>
                  <h4>
                    — Sơn Nguyễn
                    <br />
                    <em>CEO - founder CritiStudio - Một Thuở Binh Đao</em>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block5"></div>
      </div>
    </Layout>
  );
};

export default Project;
