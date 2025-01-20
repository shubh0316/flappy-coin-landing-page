/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import React, { useRef, useState,useEffect } from "react";
import pipes from "@/assets/new.png";
import Image from "next/image";
import photo from "@/assets/phoneGroup.svg";
import Container from "./container";
import gif5 from "@/assets/gifs/Coin.gif";
import gif2 from "@/assets/gifs/Flappy Bird.gif";
import gif3 from "@/assets/gifs/Flappy Pepe.gif";
import gif4 from "@/assets/gifs/Flappy Doge.gif";
import phone1 from "@/assets/phoneElements/phone1.png";
import phone2 from "@/assets/phoneElements/phone2.png";
import phone3 from "@/assets/phoneElements/phone3.png";
import phone4 from "@/assets/phoneElements/phone4.png";
import useMedia from "use-media";

const MobileView = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the active image index
  const [isMuted, setIsMuted] = useState(true); // Mute state
  const [soundLabel, setSoundLabel] = useState("Sound Off"); // Sound toggle label
  const videoRef = useRef(null); // Reference for video element

  const images = [phone1, phone2, phone3, phone4]; // Array of image sources

  // Function to set the active image by clicking a dot
  const setActiveImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Play/pause video function
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch((err) => console.log("Play failed:", err));
    } else {
      video.pause();
    }
  };

  // Mute/unmute video function
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

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 1000); // Change every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="carousel-container flex flex-col items-center justify-around">
        {/* Image */}
        <div className="image-container">
          <Image
            src={images[currentIndex]}
            alt={`Phone ${currentIndex + 1}`}
            width={400}
            height={400}
            className=""
          />
        </div>

        {/* Dots navigation */}
        <div className=" flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-4 h-4 rounded-full border-2 ${
                currentIndex === index
                  ? "bg-black border-black"
                  : "bg-transparent border-black"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-40 w-full flex justify-center">
        <div className="relative w-full max-w-2xl p-2 rounded-2xl shadow-6xl">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-2xl object-cover"
            loop
            autoPlay
            muted={isMuted}
            onClick={handlePlayPause}
          >
            <source src="/vedio2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="absolute top-4 right-4 p-2 bg-[#FFEB3B] text-black rounded-full shadow-xl cursor-pointer"
            onClick={toggleMute}
          >
            <span className="font-semibold">{soundLabel}</span>
          </div>
        </div>
      </div>
    </>
  );
};
// const MobileView = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Tracks the active image index
//   const [isMuted, setIsMuted] = useState(true); // Mute state
//   const [soundLabel, setSoundLabel] = useState("Sound Off"); // Sound toggle label
//   const videoRef = useRef(null); // Reference for video element

//   const images = [phone1, phone2, phone3, phone4]; // Array of image sources
//   // Function to set the active image by clicking a dot
//   const setActiveImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Play/pause video function
//   const handlePlayPause = () => {
//     const video = videoRef.current;
//     if (video.paused) {
//       video.play().catch((err) => console.log("Play failed:", err));
//     } else {
//       video.pause();
//     }
//   };

//   // Mute/unmute video function
//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (isMuted) {
//       setIsMuted(false);
//       setSoundLabel("Sound On");
//       video.muted = false;
//     } else {
//       setIsMuted(true);
//       setSoundLabel("Sound Off");
//       video.muted = true;
//     }
//   };

//   return (
//     <>
//       <div className="carousel-container flex flex-col items-center justify-around">
//         {/* Image */}
//         <div className="image-container">
//           <Image
//             src={images[currentIndex]}
//             alt={`Phone ${currentIndex + 1}`}
//             width={400}
//             height={400}
//             className=""
//           />
//         </div>

//         {/* Navigation buttons */}
     

//         {/* Dots navigation */}
//         <div className=" flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveImage(index)}
//               className={`w-4 h-4 rounded-full border-2 ${
//                 currentIndex === index
//                   ? "bg-black border-black"
//                   : "bg-transparent border-black"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//       <div className=""></div>
//       <div className="mt-40 w-full flex justify-center">
//   <div className="relative w-full max-w-2xl p-2 rounded-2xl shadow-6xl">
//     <video
//       ref={videoRef}
//       className="w-full h-auto rounded-2xl object-cover"
//       loop
//       autoPlay
//       muted={isMuted}
//       onClick={handlePlayPause}
//     >
//       <source src="/vedio2.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>

//     <div
//       className="absolute top-4 right-4 p-2 bg-[#FFEB3B] text-black rounded-full shadow-xl cursor-pointer"
//       onClick={toggleMute}
//     >
//       <span className="font-semibold">{soundLabel}</span>
//     </div>
//   </div>
// </div>
//     </>
//   );
// };

const DesktopView = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Mute state
  const [soundLabel, setSoundLabel] = useState("Sound Off"); // Sound toggle label

  // Play/pause video function
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch((err) => console.log("Play failed:", err));
    } else {
      video.pause();
    }
  };

  // Mute/unmute video function
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
          <div className="absolute -z-10 right-8 md:top-[200px] lg:top-[270px] sm:top-[800px] sm:right-0 sm:left-0 sm:mx-auto">
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
          <div className="">
            <Image src={gif2} alt="coins" width={120} className="absolute top-[610px] left-[140px]" />
            <Image src={gif4} alt="coins" width={100} className="absolute top-[660px] left-[340px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[640px] left-[560px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[650px] left-[600px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[640px] left-[640px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[630px] left-[680px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[650px] left-[720px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[640px] left-[760px]" />
            <Image src={gif3} alt="coins" width={90} className="absolute top-[640px] left-[1040px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1275px] left-[760px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1280px] left-[800px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1275px] left-[840px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[460px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1320px] left-[500px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[540px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[160px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1320px] left-[200px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[240px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[980px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1320px] left-[1020px]" />
            <Image src={gif5} alt="coins" width={60} className="absolute top-[1312px] left-[1060px]" />
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-2xl p-2 rounded-2xl shadow-6xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl object-cover"
                loop
                autoPlay
                muted={isMuted}
                onClick={handlePlayPause}
              >
                <source src="/vedio2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

const ThirdSection = () => {
  const isMobileView = useMedia({ maxWidth: 767 });

  return <>{isMobileView ? <MobileView /> : <DesktopView />}</>;
};

export default ThirdSection;
