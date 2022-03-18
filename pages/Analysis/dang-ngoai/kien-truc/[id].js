import React from "react";
import Analysis from "../../index";
import Image from "next/image";

const List = ({ e }) => {
  return (
    <Analysis>
      <div className="analysis-component-navigation">
        <p className="analysis-component-navigation-p">
          Nghiên Cứu Lịch Sử {">"} Đàng Ngoài {">"} Kiến Trúc {">"} Cái gì đó
        </p>
      </div>
    </Analysis>
  );
};

export default List;
