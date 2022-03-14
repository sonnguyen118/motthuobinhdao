import React, { useContext, useState, useEffect } from "react";
import Aboutus from "./Aboutus";
import ListProject from "./ListProject";
import Slideshow from "./Slideshow";
import Block from "./Block";
import Analysis from "./Analysis";

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
        autoPlay="true"
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
        <label className="switch">
          <input type="checkbox" onChange={MuteAudioBackgroundVideo} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="home-aboutus">
        <h1 className="home-aboutus">VỀ CHÚNG TÔI</h1>
        <Aboutus />
      </div>

      <div className="home-listproduct">
        <ListProject />
      </div>

      <div className="home-slideshow">
        <h1 className="home-slideshow-title">Concept Art Gallery</h1>
        <Slideshow />
      </div>
      <div>
        <Analysis />
      </div>
      <div className="home-block">
        <Block />
      </div>
    </div>
  );
};

export default Homee;
