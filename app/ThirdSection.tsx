//@ts-nocheck
"use client";
import React, { useRef, useState } from "react";
import pipes from "@/assets/new.png";
import Image from "next/image";
import photo from "@/assets/phoneGroup.png";
import Container from "./container";

const ThirdSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start with muted
  const [soundLabel, setSoundLabel] = useState("Sound Off"); // Label for sound toggle

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch((err) => console.log("Play failed:", err));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (isMuted) {
      setIsMuted(false);
      setSoundLabel("Sound On");
      video.muted = false;
    } else {
      setIsMuted(true);
      setSoundLabel("Sound Off");
      video.muted = true;
    }
  };

  return (
    <>
      <Container>
        <div className="relative">
          <div className="absolute -z-10 right-8 md:top-[1200px] lg:top-[300px] sm:top-[800px] sm:right-0 sm:left-0 sm:mx-auto">
            <Image src={pipes} alt="Background Pipes" className="mx-auto" />
          </div>

          <div className="overflow-x-hidden">
            <div className="w-full mt-[700px] max-w-[1440px] mx-auto">
              <div className="relative w-full left-14 md:left-16 sm:left-0 sm:mx-auto">
                <Image
                  src={photo}
                  alt="Phone Group"
                  className="mx-auto w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-2xl p-2 rounded-2xl shadow-6xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl object-cover"
                loop
                autoPlay
                muted={isMuted} // Start muted
                onClick={handlePlayPause}
              >
                <source src="/vedio2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Sound toggle button inside the video */}
              <div
                className="absolute top-4 right-4 p-2 bg-[#FFEB3B] text-black rounded-full shadow-xl cursor-pointer"
                onClick={toggleMute}
              >
                <span className="font-semibold">{soundLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ThirdSection;
