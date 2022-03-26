import React from "react";
import Layout from "../Components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-s">
            <div className="profile-header-img"></div>
            <p className="profile-header-name">Sơn Nguyễn</p>
          </div>
          <div className="profile-header-edit">
            <i className="profile-header-edit-icon	fas fa-user-edit" />
            <span className="profile-header-edit-span">
              Chỉnh sửa hồ sơ cá nhân
            </span>
          </div>
        </div>
        <div className="profile-baner"></div>
        <div className="profile-main">
          <div className="profile-main-menu">
            <div className="profile-main-menu-header">
              <div className="profile-main-menu-header-img"></div>
              <div className="profile-main-menu-header-title">
                <p className="profile-main-menu-header-title-name">Xin Chào</p>
                <p className="profile-main-menu-header-title-sub">Sơn nguyễn</p>
              </div>
            </div>
            <div className="profile-main-menu-list">
              <i className="profile-main-menu-list-icon fas fa-user-alt" />
              <p className="profile-main-menu-list-p">Ưu Đãi Dành Riêng Bạn</p>
            </div>
            <div className="profile-main-menu-list">
              <i className="profile-main-menu-list-icon fas fa-user-alt" />
              <p className="profile-main-menu-list-p">Ưu Đãi Dành Riêng Bạn</p>
            </div>
            <div className="profile-main-menu-list">
              <i className="profile-main-menu-list-icon fas fa-user-alt" />
              <p className="profile-main-menu-list-p">Ưu Đãi Dành Riêng Bạn</p>
            </div>
            <div className="profile-main-menu-list">
              <i className="profile-main-menu-list-icon fas fa-user-alt" />
              <p className="profile-main-menu-list-p">Ưu Đãi Dành Riêng Bạn</p>
            </div>
            <div className="profile-main-menu-list">
              <i className="profile-main-menu-list-icon fas fa-user-alt" />
              <p className="profile-main-menu-list-p">Ưu Đãi Dành Riêng Bạn</p>
            </div>
          </div>
          <div className="profile-main-block">
            <div className="profile-main-block-title">
              <p className="profile-main-block-title-name">Hồ Sơ Của Tôi</p>
              <p className="profile-main-block-title-sub">
                Quản lý thông tin hồ sơ để bảo mật tài khoản
              </p>
            </div>
            <div className="profile-main-block-main">
              <div className="profile-main-block-main-infor">
                <div className="profile-main-block-main-infor-1">
                  <p className="profile-main-block-main-infor-1-p">
                    Tên Đăng Nhập
                  </p>
                  <p className="profile-main-block-main-infor-1-p">Tên</p>
                  <p className="profile-main-block-main-infor-1-p">Email</p>
                  <p className="profile-main-block-main-infor-1-p">
                    Số Điện Thoại
                  </p>
                  <p className="profile-main-block-main-infor-1-p">Giới Tính</p>
                  <p className="profile-main-block-main-infor-1-p">Ngày Sinh</p>
                </div>
                <div className="profile-main-block-main-infor-2">
                  <p className="profile-main-block-main-infor-2-p">
                    Tên Đăng Nhập
                  </p>
                  <p className="profile-main-block-main-infor-2-p">Tên</p>
                  <p className="profile-main-block-main-infor-2-p">Email</p>
                  <p className="profile-main-block-main-infor-2-p">
                    Số Điện Thoại
                  </p>
                  <p className="profile-main-block-main-infor-2-p">Giới Tính</p>
                  <p className="profile-main-block-main-infor-2-p">Ngày Sinh</p>
                </div>
              </div>
              <div className="profile-main-block-main-image">
                <div className="profile-main-block-main-image-edit">
                  <i className="fas fa-user-alt profile-main-block-main-image-edit-icon " />
                </div>
                <div className="profile-main-block-main-image-btn">
                  Chọn Ảnh
                </div>
                <p className="profile-main-block-main-image-p">
                  Dụng lượng file tối đa 1 MB
                </p>
                <p className="profile-main-block-main-image-p">
                  Định dạng:.JPEG, .PNG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
