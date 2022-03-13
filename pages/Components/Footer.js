import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="row">
          <div className="footer-header__col col">
            <Image
              className="footer-header__col-Image"
              src={`/media/logo-red.png`}
              width={151}
              height={151}
            ></Image>
            <h1 className="footer-header__col-title">SUBSCRIBE</h1>
            <input
              className="footer-header__col-input"
              placeholder="Enter Your Email"
            ></input>
            <button className="footer-header__col-button">
              <span className="footer-header__col-button-span">SUBMIT</span>
            </button>
          </div>
          <div className="footer-header__col col">
            <h1 className="footer-header__col-title">SẢN PHẨM</h1>
            <a href="/shop" className="footer-header__col-text">
              - Cửa hàng
            </a>
            <a href="/game" className="footer-header__col-text">
              - Game
            </a>
            <a href="/films" className="footer-header__col-text">
              - Phim
            </a>
            <a href="/technology" className="footer-header__col-text">
              - Công nghệ
            </a>
            <a href="/community" className="footer-header__col-text">
              - Cộng Đồng
            </a>
            <a href="/help" className="footer-header__col-text">
              - Trợ giúp
            </a>
            <a href="/contact" className="footer-header__col-text">
              - Liên Hệ
            </a>
          </div>
          <div className="footer-header__col col">
            <h1 className="footer-header__col-title">DỰ ÁN</h1>
            <a href="/films" className="footer-header__col-text">
              - Phim 3D cổ trang
            </a>
            <a href="/game" className="footer-header__col-text">
              - Game
            </a>
            <a href="/films" className="footer-header__col-text">
              - Cổ phục
            </a>
          </div>
          <div className="footer-header__col col">
            <h1 className="footer-header__col-title">TRỤ SỞ CHÍNH</h1>
            <div className="footer-header__col-text">
              <i class="fa fa-volume-control-phone" />{" "}
              <span className="footer-header__col-text-a">0981839980</span>
            </div>
            <div className="footer-header__col-text">
              <i class="fa fa-envelope-o" />{" "}
              <span className="footer-header__col-text-a">
                infor@critistudio.com
              </span>
            </div>
            <div className="footer-header__col-text">
              <i class="fa fa-home" />{" "}
              <span className="footer-header__col-text-a">
                Đô Lương - Đông Hưng - Thái Bình
              </span>
            </div>
            <div className="footer-header__col-social">
              <a
                className="footer-header__col-social-Image"
                href="https://www.facebook.com/CritiStudio"
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/facebook.png`}
                  width={40}
                  height={40}
                />
              </a>

              <a
                className="footer-header__col-social-Image"
                href="https://www.instagram.com/Critistudio/"
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/instagram.png`}
                  width={40}
                  height={40}
                />
              </a>

              <a
                className="footer-header__col-social-Image"
                href="https://www.linkedin.com/in/studio-criti-87049b232/"
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/linkedin.png`}
                  width={40}
                  height={40}
                />
              </a>

              <a
                className="footer-header__col-social-Image"
                href="https://www.tiktok.com/@critistudio"
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/tik-tok.png`}
                  width={40}
                  height={40}
                />
              </a>

              <a
                className="footer-header__col-social-Image"
                href="https://twitter.com/CritiStudio"
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/twitter.png`}
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <p className="footer-footer__text">
          © 2022 | Built, Powered, & Developed By: Nguyễn Văn Sơn
        </p>
      </div>
    </div>
  );
};

export default Footer;
