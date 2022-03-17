import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              alt="description of image"
            />
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
            <Link href="/shop" className="footer-header__col-text" passHref>
              - Cửa hàng
            </Link>
            <Link href="/game" className="footer-header__col-text" passHref>
              - Game
            </Link>
            <Link href="/films" className="footer-header__col-text" passHref>
              - Phim
            </Link>
            <Link
              href="/technology"
              className="footer-header__col-text"
              passHref
            >
              - Công nghệ
            </Link>
            <Link
              href="/community"
              className="footer-header__col-text"
              passHref
            >
              - Cộng Đồng
            </Link>
            <Link href="/help" className="footer-header__col-text" passHref>
              - Trợ giúp
            </Link>
            <Link href="/contact" className="footer-header__col-text" passHref>
              - Liên Hệ
            </Link>
          </div>
          <div className="footer-header__col col">
            <h1 className="footer-header__col-title">DỰ ÁN</h1>
            <Link href="/films" className="footer-header__col-text" passHref>
              - Phim 3D cổ trang
            </Link>
            <Link href="/game" className="footer-header__col-text" passHref>
              - Game
            </Link>
            <Link href="/films" className="footer-header__col-text" passHref>
              - Cổ phục
            </Link>
          </div>
          <div className="footer-header__col col">
            <h1 className="footer-header__col-title">TRỤ SỞ CHÍNH</h1>
            <div className="footer-header__col-text">
              <i className="fa fa-volume-control-phone" />{" "}
              <span className="footer-header__col-text-a">0981839980</span>
            </div>
            <div className="footer-header__col-text">
              <i className="fa fa-envelope-o" />{" "}
              <span className="footer-header__col-text-a">
                infor@critistudio.com
              </span>
            </div>
            <div className="footer-header__col-text">
              <i className="fa fa-home" />{" "}
              <span className="footer-header__col-text-a">
                Đô Lương - Đông Hưng - Thái Bình
              </span>
            </div>
            <div className="footer-header__col-social">
              <Link
                className="footer-header__col-social-Image"
                href="https://www.facebook.com/CritiStudio"
                passHref
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/facebook.png`}
                  width={40}
                  height={40}
                  alt="description of image"
                />
              </Link>

              <Link
                className="footer-header__col-social-Image"
                href="https://www.instagram.com/Critistudio/"
                passHref
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/instagram.png`}
                  width={40}
                  height={40}
                  alt="description of image"
                />
              </Link>

              <Link
                className="footer-header__col-social-Image"
                href="https://www.linkedin.com/in/studio-criti-87049b232/"
                passHref
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/linkedin.png`}
                  width={40}
                  height={40}
                  alt="description of image"
                />
              </Link>

              <Link
                className="footer-header__col-social-Image"
                href="https://www.tiktok.com/@critistudio"
                passHref
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/tik-tok.png`}
                  width={40}
                  height={40}
                  alt="description of image"
                />
              </Link>

              <Link
                className="footer-header__col-social-Image"
                href="https://twitter.com/CritiStudio"
                passHref
              >
                <Image
                  className="footer-header__col-social-Image-i"
                  src={`/media/twitter.png`}
                  width={40}
                  height={40}
                  alt="description of image"
                />
              </Link>
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
