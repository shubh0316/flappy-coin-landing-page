import React from "react";
import "./MiddleSection.css";
import Image from "next/image";
import VideoImage from "@/assets/videoImage.png";

const MiddleSection = () => {
  return (
    <>
      <div className="items-center absolute  top-[800px] w-full h-[35vh] object-cover lg:h-full">
        <div className="container2">
          <svg width="0" height="0">
            <defs>
              <clipPath id="cloudClipPath" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.99 0.17C0.99 0.17 0.95 0.02 0.86 0.1C0.84 0.02 0.74 0.03 0.71 0.09C0.67 0.03 0.64 0.05 0.61 0.08C0.6 0.08 0.58 0.08 0.58 0.1C0.55 0.01 0.47 0.02 0.44 0.08C0.4 0.03 0.36 0.03 0.34 0.05C0.32 0.05 0.31 0.06 0.3 0.07C0.3 0.06 0.3 0.05 0.29 0.05C0.26 -0.01 0.15 -0.01 0.13 0.05C0.01 -0.03 0 0.17 0 0.17V0.88C0.04 0.94 0.12 0.99 0.18 0.88C0.26 0.99 0.31 0.95 0.34 0.91C0.37 0.97 0.42 0.95 0.46 0.91C0.56 1 0.61 0.96 0.65 0.91C0.69 0.97 0.73 0.95 0.76 0.91C0.92 1.09 0.99 0.81 0.99 0.81V0.17Z"
                  transform="scale(1)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="video-container relative right-0">
            <video autoPlay loop muted className="video-element">
              <source
                src="/loop.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <Image
                src={VideoImage}
                alt="Overlay Image"
                className="overlay-image"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
