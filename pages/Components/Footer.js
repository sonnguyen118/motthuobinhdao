import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block">
        <div className="footer-block-1">
          <div className="footer-block-1-col address-icon-footer">
            <i className="footer-block-1-col-icon fas fa-map-marker-alt"></i>
            <div className="footer-block-1-col-infor">
              <p className="footer-block-1-col-infor-title">Địa Chỉ</p>
              <p className="footer-block-1-col-infor-body">
                Đô Lương, Đông Hưng, Thái Bình
              </p>
            </div>
          </div>
          <div className="footer-block-1-col phone-icon-footer">
            <i className="footer-block-1-col-icon fas fa-phone-volume"></i>
            <div className="footer-block-1-col-infor">
              <p className="footer-block-1-col-infor-title">Liên Hệ</p>
              <p className="footer-block-1-col-infor-body">0981.83.9980</p>
            </div>
          </div>
          <div className="footer-block-1-col">
            <i className="footer-block-1-col-icon fas fa-envelope-open"></i>
            <div className="footer-block-1-col-infor">
              <p className="footer-block-1-col-infor-title">Email</p>
              <p className="footer-block-1-col-infor-body">
                infor@motthuoubinhdao.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-block-2">
          <div className="footer-block-2-col">
            <div className="footer-block-2-col-inforweb">
              <div className="footer-block-2-col-inforweb-img">
                <Image
                  src={`/media/baner-logo-red-text-white.png`}
                  // className="logo"
                  // width={481}
                  // height={82}
                  layout="fill"
                  objectFit="contain"
                  alt="description of image"
                />
              </div>
              {/* <p className="footer-block-2-col-inforweb-p">
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p> */}
            </div>
            <div className="footer-block-2-col-social">
              <div className="footer-block-2-col-social-p lien-ket-footer">
                Theo Dõi Chúng Tôi Tại
              </div>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-facebook"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-instagram"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-youtube"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-twitter"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-skype"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-linkedin-in"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-pinterest"></i>
              </Link>
              <Link href={"/"} passHref>
                <i className="footer-block-2-col-social-icon fab fa-github"></i>
              </Link>
              <Link href={"/"} passHref>
                <div className="footer-block-2-col-social-icon footer-block-2-col-social-icon"></div>
              </Link>
            </div>
          </div>
          <div className="footer-block-2-col lien-ket-footer">
            <p className="footer-block-2-col-title">Liên Kết</p>
            <ul className="footer-block-2-col-body">
              <div>
                <Link href={"/"} passHref>
                  <li className="footer-block-2-col-body-li"> Trang Chủ</li>
                </Link>
                <Link href={"/"} passHref>
                  <li className="footer-block-2-col-body-li"> Nghiên Cứu</li>
                </Link>
                <Link href={"/"} passHref>
                  <li className="footer-block-2-col-body-li">Dự Án</li>
                </Link>
              </div>
              <div>
                <Link href={"/"} passHref>
                  <li className="footer-block-2-col-body-li">Liên Hệ</li>
                </Link>
                <Link href={"/"} passHref>
                  <li className="footer-block-2-col-body-li">Tuyển Dụng</li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="footer-block-2-col">
            <p className="footer-block-2-col-title">
              Hãy Liên Hệ Với Chúng Tôi
            </p>
            <div className="footer-block-2-col-form">
              <p className="footer-block-2-col-form-p">
                Đừng bỏ lỡ thời gian, hãy liên hệ ngay với chúng tôi, để biết
                tiến độ dự án cùng những bài nghiên cứu lịch sử mới và chất
                lượng nhất !
              </p>
              <div className="footer-block-2-col-form-sub">
                <input
                  className="footer-block-2-col-form-sub-input"
                  type="text"
                  name="email"
                  placeholder="Email của bạn"
                />
                <div className="footer-block-2-col-form-sub-btn">
                  <i className="footer-block-2-col-form-sub-btn-icon fab fa-telegram-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p className="footer-copyright-p">
          Copyright © 2021, All Right
          <a
            className="footer-copyright-p-a"
            href="https://www.facebook.com/sonviolinandflute/"
          >
            Sơn Nguyễn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
