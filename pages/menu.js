import React from "react";
import Layout from "./Components/Layout";
import Image from "next/image";

const Menu = () => {
  return (
    <Layout>
      <div className="menu">
        <div className="menu-header">
          <p className="menu-header-p">Menu</p>
          <div className="menu-header-icon">
            <div className="menu-header-icon-group">
              <i className="menu-header-icon-group-icon fas fa-info-circle" />
            </div>
            <div className="menu-header-icon-group">
              <i className="menu-header-icon-group-icon fas fa-search" />
            </div>
          </div>
        </div>
        <div className="menu-block">
          <div className="menu-block-1">
            <div className="menu-block-1-list">
              <div className="menu-block-1-list-item">
                <div className="menu-block-1-list-item-img-1"></div>
                <div className="menu-block-1-list-item-p">Thời Kỳ Nhà Mạc</div>
              </div>
            </div>
            <div className="menu-block-1-list">
              <div className="menu-block-1-list-item">
                <div className="menu-block-1-list-item-img-2"></div>
                <div className="menu-block-1-list-item-p">Đàng Ngoài</div>
              </div>
            </div>
            <div className="menu-block-1-list">
              <div className="menu-block-1-list-item">
                <div className="menu-block-1-list-item-img-3"></div>
                <div className="menu-block-1-list-item-p">Đàng Trong</div>
              </div>
            </div>
            <div className="menu-block-1-list">
              <div className="menu-block-1-list-item">
                <div className="menu-block-1-list-item-img-4"></div>
                <div className="menu-block-1-list-item-p">
                  Tây Sơn - Nhà Nguyễn
                </div>
              </div>
            </div>
          </div>
          <div className="menu-block-2">
            <p className="menu-block-2-title">Lối tắt đến các chủ đề</p>
            <div className="menu-block-2-list">
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
              <div className="menu-block-2-list-item">
                <div className="menu-block-2-list-item-img"></div>
                <p className="menu-block-2-list-item-text">
                  Kiến trúc thời kỳ Mạc
                </p>
              </div>
            </div>
          </div>
          <div className="menu-block-3">
            <div className="menu-block-3-title">Các bài đăng mới nhất</div>
            <div className="menu-block-3-list">
              <div className="menu-block-3-list-item">
                <div className="menu-block-3-list-item-img">
                  <Image
                    src={`/media/chua-keo-14.jpg`}
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="menu-block-3-list-item-content">
                  <p className="menu-block-3-list-item-content-main">
                    Kiến trúc đền - đình chùa thời Lê Trung Hưng tại Bắc Bộ VN
                  </p>
                  <div className="menu-block-3-list-item-content-sub">
                    <i className="menu-block-3-list-item-content-sub-icon fas fa-hand-point-right" />
                    <p className="menu-block-3-list-item-content-sub-p">
                      Kiến trúc Đàng Ngoài
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-block-3-list-item">
                <div className="menu-block-3-list-item-img">
                  <Image
                    src={`/media/chua-keo-14.jpg`}
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="menu-block-3-list-item-content">
                  <p className="menu-block-3-list-item-content-main">
                    Kiến trúc đền - đình chùa thời Lê Trung Hưng tại Bắc Bộ VN
                  </p>
                  <div className="menu-block-3-list-item-content-sub">
                    <i className="menu-block-3-list-item-content-sub-icon fas fa-hand-point-right" />
                    <p className="menu-block-3-list-item-content-sub-p">
                      Kiến trúc Đàng Ngoài
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-block-3-list-item">
                <div className="menu-block-3-list-item-img">
                  <Image
                    src={`/media/chua-keo-14.jpg`}
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="menu-block-3-list-item-content">
                  <p className="menu-block-3-list-item-content-main">
                    Kiến trúc đền - đình chùa thời Lê Trung Hưng tại Bắc Bộ VN
                  </p>
                  <div className="menu-block-3-list-item-content-sub">
                    <i className="menu-block-3-list-item-content-sub-icon fas fa-hand-point-right" />
                    <p className="menu-block-3-list-item-content-sub-p">
                      Kiến trúc Đàng Ngoài
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-block-3-list-item">
                <div className="menu-block-3-list-item-img">
                  <Image
                    src={`/media/chua-keo-14.jpg`}
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="menu-block-3-list-item-content">
                  <p className="menu-block-3-list-item-content-main">
                    Kiến trúc đền - đình chùa thời Lê Trung Hưng tại Bắc Bộ VN
                  </p>
                  <div className="menu-block-3-list-item-content-sub">
                    <i className="menu-block-3-list-item-content-sub-icon fas fa-hand-point-right" />
                    <p className="menu-block-3-list-item-content-sub-p">
                      Kiến trúc Đàng Ngoài
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-block-3-list-item">
                <div className="menu-block-3-list-item-img">
                  <Image
                    src={`/media/chua-keo-14.jpg`}
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                    alt="description of image"
                  />
                </div>
                <div className="menu-block-3-list-item-content">
                  <p className="menu-block-3-list-item-content-main">
                    Kiến trúc đền - đình chùa thời Lê Trung Hưng tại Bắc Bộ VN
                  </p>
                  <div className="menu-block-3-list-item-content-sub">
                    <i className="menu-block-3-list-item-content-sub-icon fas fa-hand-point-right" />
                    <p className="menu-block-3-list-item-content-sub-p">
                      Kiến trúc Đàng Ngoài
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-block-3-btn">Xem thêm</div>
          </div>
          <div className="menu-block-4">
            <div className="menu-block-4"></div>
            <div className="menu-block-4-item">
              <div className="menu-block-4-item-main">
                <i className="menu-block-4-item-main-icon fas fa-cogs" />
                <p className="menu-block-4-item-main-text">Đổi Màu nền</p>
              </div>
              <i className="menu-block-4-item-item fas fa-chevron-down" />
            </div>
            <div className="menu-block-4-item">
              <div className="menu-block-4-item-main">
                <i className="menu-block-4-item-main-icon fas fa-volume-up" />
                <p className="menu-block-4-item-main-text">Đổi Giọng Đọc</p>
              </div>
              <i className="menu-block-4-item-item fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
