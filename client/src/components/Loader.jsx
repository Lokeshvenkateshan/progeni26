import React, { useEffect } from "react";
import "../style/loader.css";
import loaderVideo from "../assets/new_loader.mp4";

const Loader = ({ onFinish }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <video
        src={loaderVideo}
        autoPlay
        muted
        playsInline
        className="loader-video"
      />
    </div>
  );
};

export default Loader;
