import React from "react";
import Image from "next/image";

const Block = () => {
  return (
    <div>
      <div className="home__block-2">
        <div className="home__block-2-Image">
          <Image
            src={`/media/block_1.jpg`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="home__block-2-title">
          <p className="home__block-2-title-h1">DỰ ÁN PHIM 3D CỔ TRANG</p>
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
          <div className="home__block-title-linkhear">
            <div className="home__block-title-linkhear-icon">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                <svg
                  id="heart-svg"
                  viewBox="467 392 58 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Group"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(467 392)"
                  >
                    <path
                      d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                      id="heart"
                      fill="#AAB8C2"
                    />
                    <circle
                      id="main-circ"
                      fill="#E2264D"
                      opacity={0}
                      cx="29.5"
                      cy="29.5"
                      r="1.5"
                    />
                    <g id="grp7" opacity={0} transform="translate(7 6)">
                      <circle id="oval1" fill="#9CD8C3" cx={2} cy={6} r={2} />
                      <circle id="oval2" fill="#8CE8C3" cx={5} cy={2} r={2} />
                    </g>
                    <g id="grp6" opacity={0} transform="translate(0 28)">
                      <circle id="oval1" fill="#CC8EF5" cx={2} cy={7} r={2} />
                      <circle id="oval2" fill="#91D2FA" cx={3} cy={2} r={2} />
                    </g>
                    <g id="grp3" opacity={0} transform="translate(52 28)">
                      <circle id="oval2" fill="#9CD8C3" cx={2} cy={7} r={2} />
                      <circle id="oval1" fill="#8CE8C3" cx={4} cy={2} r={2} />
                    </g>
                    <g id="grp2" opacity={0} transform="translate(44 6)">
                      <circle id="oval2" fill="#CC8EF5" cx={5} cy={6} r={2} />
                      <circle id="oval1" fill="#CC8EF5" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp5" opacity={0} transform="translate(14 50)">
                      <circle id="oval1" fill="#91D2FA" cx={6} cy={5} r={2} />
                      <circle id="oval2" fill="#91D2FA" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp4" opacity={0} transform="translate(35 50)">
                      <circle id="oval1" fill="#F48EA7" cx={6} cy={5} r={2} />
                      <circle id="oval2" fill="#F48EA7" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp1" opacity={0} transform="translate(24)">
                      <circle id="oval1" fill="#9FC7FA" cx="2.5" cy={3} r={2} />
                      <circle id="oval2" fill="#9FC7FA" cx="7.5" cy={2} r={2} />
                    </g>
                  </g>
                </svg>
              </label>
            </div>
            <div className="wrappers">
              <a className="cta" href="#">
                <span className="wrappers-text">Đi Tới Dự Án</span>
                <span>
                  <svg
                    className="wrappers-sgv"
                    // width="66px"
                    // height="43px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home__block-3">
        <div className="home__block-3-title">
          <p className="home__block-3-title-h1">TEXTURE CHÂN THỰC</p>
          <p className="home__block-3-title-span">
            Texture Được dịch từ tiếng Anh-Trong nghệ thuật thị giác, kết cấu là
            chất lượng bề mặt cảm nhận của một tác phẩm nghệ thuật. Nó là một
            yếu tố của thiết kế hai chiều và ba chiều và được phân biệt bởi các
            đặc tính hình ảnh và vật lý nhận thức của nó.
          </p>
          <div className="home__block-title-linkhear">
            <div className="home__block-title-linkhear-icon">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                <svg
                  id="heart-svg"
                  viewBox="467 392 58 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Group"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(467 392)"
                  >
                    <path
                      d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                      id="heart"
                      fill="#AAB8C2"
                    />
                    <circle
                      id="main-circ"
                      fill="#E2264D"
                      opacity={0}
                      cx="29.5"
                      cy="29.5"
                      r="1.5"
                    />
                    <g id="grp7" opacity={0} transform="translate(7 6)">
                      <circle id="oval1" fill="#9CD8C3" cx={2} cy={6} r={2} />
                      <circle id="oval2" fill="#8CE8C3" cx={5} cy={2} r={2} />
                    </g>
                    <g id="grp6" opacity={0} transform="translate(0 28)">
                      <circle id="oval1" fill="#CC8EF5" cx={2} cy={7} r={2} />
                      <circle id="oval2" fill="#91D2FA" cx={3} cy={2} r={2} />
                    </g>
                    <g id="grp3" opacity={0} transform="translate(52 28)">
                      <circle id="oval2" fill="#9CD8C3" cx={2} cy={7} r={2} />
                      <circle id="oval1" fill="#8CE8C3" cx={4} cy={2} r={2} />
                    </g>
                    <g id="grp2" opacity={0} transform="translate(44 6)">
                      <circle id="oval2" fill="#CC8EF5" cx={5} cy={6} r={2} />
                      <circle id="oval1" fill="#CC8EF5" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp5" opacity={0} transform="translate(14 50)">
                      <circle id="oval1" fill="#91D2FA" cx={6} cy={5} r={2} />
                      <circle id="oval2" fill="#91D2FA" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp4" opacity={0} transform="translate(35 50)">
                      <circle id="oval1" fill="#F48EA7" cx={6} cy={5} r={2} />
                      <circle id="oval2" fill="#F48EA7" cx={2} cy={2} r={2} />
                    </g>
                    <g id="grp1" opacity={0} transform="translate(24)">
                      <circle id="oval1" fill="#9FC7FA" cx="2.5" cy={3} r={2} />
                      <circle id="oval2" fill="#9FC7FA" cx="7.5" cy={2} r={2} />
                    </g>
                  </g>
                </svg>
              </label>
            </div>
            <div className="wrappers">
              <a className="cta" href="#">
                <span className="wrappers-text">Đi Tới Dự Án</span>
                <span>
                  <svg
                    className="wrappers-sgv"
                    // width="26px"
                    // height="23px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="home__block-3-Image">
          <Image
            src={`/media/block_2.png`}
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
            alt="description of image"
          />
        </div>
      </div>
    </div>
  );
};

export default Block;
