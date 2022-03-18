import React, { useContext, useState, useEffect } from "react";
import Analysis from "../../index";
import Image from "next/image";

const List = () => {
  const [colapp1, setColapp1] = useState(true);
  const [colapp2, setColapp2] = useState(true);
  const Collapse1 = () => {
    if (colapp1 == true) {
      setColapp1(false);
    } else {
      setColapp1(true);
    }
  };
  const Collapse2 = () => {
    if (colapp2 == true) {
      setColapp2(false);
    } else {
      setColapp2(true);
    }
  };
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài {">"} Kiến Trúc {">"} Chùa Keo
          Kiến Trúc Cổ
        </p>
      </div>
      <div className="analysis-component">
        <div className="analysis-component_index">
          <div className="analysis-component_index-header">
            <h1 className="analysis-component_index-header-h1">
              CHÙA KEO KIẾN TRÚC CỔ
            </h1>
            <h3 className="analysis-component_index-header-h3">
              KIẾN TRÚC ĐÀNG NGOÀI
            </h3>
            <p className="analysis-component_index-header-p">
              Thứ Sáu, ngày 18/03/2022 17:44 PM - GMT+7
            </p>
          </div>
          <div className="news">
            <div className="news-title">
              <div onClick={Collapse1}>
                <i
                  className={
                    colapp1
                      ? "news-title-icon fas fa-angle-down"
                      : "news-title-icon fas fa-angle-right"
                  }
                ></i>
              </div>
              <p className="news-title-p">Lịch Sử</p>
            </div>
            <div className={colapp1 ? "news-content" : "hide"}>
              <p className="news-content-p">
                Sau gần 500 năm tồn tại, năm 1611, nước sông Hồng lên to, làm
                ngập làng Giao Thủy, nơi có chùa. Một bộ phận dân cư dời đi nơi
                khác, lập thành làng Hành Thiện, xây dựng nên ngôi chùa Keo mới,
                thường được gọi là chùa Keo Dưới Keo Hạ hay chùa Keo Hành Thiện
                - nay ở xã Xuân Hồng, huyện Xuân Trường, Nam Định. Một bộ phận
                dân cư dời sang tả ngạn sông Hồng, lập làng Dũng Nhuệ trên đất
                Thái Bình và cũng dựng lên một ngôi chùa, gọi là chùa Keo Trên
                -Keo Thượng.
              </p>
              <br></br>
              <p className="news-content-p">
                Theo văn bia chùa Keo thì chùa do một vị quan lớn thời Lê-Trịnh
                đứng ra khởi công xây dựng lại, đó là Quận công Hoàng Nhân Dũng
                ở làng Tứ Quán, phủ Hải Thanh. Lúc bấy giờ đang có cuộc nội
                chiến Trịnh-Nguyễn nên chúa Trịnh chỉ cấp cho nhà chùa 100 cây
                gỗ lim còn tất cả vật liệu khác đều do nhân dân tự đóng góp. Vì
                vậy, vị Quận công đã phải mất 19 năm vận động quyên góp
                1611-1630. Đến tháng 7/1630, ông đã mời được 42 hiệp thợ và khởi
                công xây dựng. Trong vòng 28 tháng, toàn bộ công trình đã được
                khánh thành 11/1632. Văn bia chùa Keo còn ghi lại diện tích chùa
                rộng khoảng 58.000m2, gồm nhiều cụm kiến trúc khác nhau. Chùa
                Keo Thượng mang đậm phong cách kiến trúc thời Lê, phỏng theo
                kiến trúc chùa Keo Hành Thiện. Chùa được trùng tu nhiều lần, vào
                các năm 1689, 1707, 1941.
              </p>
            </div>
            <div className="news-title">
              <div onClick={Collapse2}>
                <i
                  className={
                    colapp2
                      ? "news-title-icon fas fa-angle-down"
                      : "news-title-icon fas fa-angle-right"
                  }
                ></i>
              </div>
              <p className="news-title-p">Kiến Trúc Tổng Thể</p>
            </div>
            <div className={colapp2 ? "news-content" : "hide"}>
              <p className="news-content-p">
                Sau gần 500 năm tồn tại, năm 1611, nước sông Hồng lên to, làm
                ngập làng Giao Thủy, nơi có chùa. Một bộ phận dân cư dời đi nơi
                khác, lập thành làng Hành Thiện, xây dựng nên ngôi chùa Keo mới,
                thường được gọi là chùa Keo Dưới Keo Hạ hay chùa Keo Hành Thiện
                - nay ở xã Xuân Hồng, huyện Xuân Trường, Nam Định. Một bộ phận
                dân cư dời sang tả ngạn sông Hồng, lập làng Dũng Nhuệ trên đất
                Thái Bình và cũng dựng lên một ngôi chùa, gọi là chùa Keo Trên
                -Keo Thượng.
              </p>
              <br></br>
              <p className="news-content-p">
                Theo văn bia chùa Keo thì chùa do một vị quan lớn thời Lê-Trịnh
                đứng ra khởi công xây dựng lại, đó là Quận công Hoàng Nhân Dũng
                ở làng Tứ Quán, phủ Hải Thanh. Lúc bấy giờ đang có cuộc nội
                chiến Trịnh-Nguyễn nên chúa Trịnh chỉ cấp cho nhà chùa 100 cây
                gỗ lim còn tất cả vật liệu khác đều do nhân dân tự đóng góp. Vì
                vậy, vị Quận công đã phải mất 19 năm vận động quyên góp
                1611-1630. Đến tháng 7/1630, ông đã mời được 42 hiệp thợ và khởi
                công xây dựng. Trong vòng 28 tháng, toàn bộ công trình đã được
                khánh thành 11/1632. Văn bia chùa Keo còn ghi lại diện tích chùa
                rộng khoảng 58.000m2, gồm nhiều cụm kiến trúc khác nhau. Chùa
                Keo Thượng mang đậm phong cách kiến trúc thời Lê, phỏng theo
                kiến trúc chùa Keo Hành Thiện. Chùa được trùng tu nhiều lần, vào
                các năm 1689, 1707, 1941.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Analysis>
  );
};

export default List;
