import React from "react";

const ErrorMessenger = () => {
  return (
    <div id="containers">
      <div id="error-box">
        <div className="dot" />
        <div className="dot two" />
        <div className="face2">
          <div className="eye" />
          <div className="eye right" />
          <div className="mouth sad" />
        </div>
        <div className="shadow move" />
        <div className="message">
          <h1 className="messenger-h1 alert">Error!</h1>
          <p className="messenger-p">oh no, something went wrong.</p>
        </div>
        <button className="button-box">
          <h1 className="messenger-h1 red">try again</h1>
        </button>
      </div>
    </div>
  );
};

export default ErrorMessenger;
