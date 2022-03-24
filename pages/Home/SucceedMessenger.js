import React from "react";

const SucceedMessenger = () => {
  return (
    <div id="containers">
      <div id="success-box">
        <div className="dot" />
        <div className="dot two" />
        <div className="face">
          <div className="eye" />
          <div className="eye right" />
          <div className="mouth happy" />
        </div>
        <div className="shadow scale" />
        <div className="message">
          <h1 className="messenger-h1 alert">THAY ĐỔI ÂM THANH THÀNH CÔNG</h1>
          <p className="messenger-p">yay, everything is working.</p>
        </div>
        <button className="button-box">
          <h1 className="messenger-h1 green">Tiếp Tục ...</h1>
        </button>
      </div>
    </div>
  );
};

export default SucceedMessenger;
