import React from "react";

const audio = () => {
  return (
    <audio controls>
      <source src="horse.ogg" type="audio/ogg" />
      <source src={"/media/dang-ngoai-index-women.mp3"} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default audio;
