import React from "react";
import "./cover.css";

const Cover = () => {
  return (
    <div id="cover" className="cover">
      <div className="cover-info">
          <h1 className="cover-title cover-text">Hello, I'm Rodrigo</h1>
          <p className="cover-description cover-text">A Web Developer</p>
      </div>
      <div className="cover-background" />
    </div>
  );
};

export default Cover;
