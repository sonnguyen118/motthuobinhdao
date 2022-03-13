import React, { useContext, useState, useEffect } from "react";
import Aboutus from "./Aboutus";

const Homee = () => {
  const [Volume, setVolume] = useState(true);
  console.log(Volume);
  const MuteAudioBackgroundVideo = () => {
    if (Volume == true) {
      setVolume(false);
      console.log(Volume);
    } else {
      setVolume(true);
      console.log(Volume);
    }
  };
  return (
    <div className="home">
      <video
        autoplay="true"
        loop="true"
        muted={Volume}
        id="myVideo"
        className="home__video muted"
      >
        <source
          className="home__video-size"
          src={`/media/baner-video-3.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="block-switch">
        {Volume == true ? (
          <span className="block-switch-text">Đã Tắt Âm Thanh</span>
        ) : (
          <span className="block-switch-text">Đang Bật Âm Thanh</span>
        )}
        <label class="switch">
          <input type="checkbox" onChange={MuteAudioBackgroundVideo} />
          <span class="slider round"></span>
        </label>
      </div>

      <Aboutus />
    </div>
  );
};

export default Homee;