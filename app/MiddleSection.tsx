"use client"
import React from "react";
import "./MiddleSection.css";
import Image from "next/image";
import VideoImage from "@/assets/Frame.svg";
import useMedia from "use-media";
import gif3 from "@/assets/gifs/Flappy Pepe.gif";
import gif1 from "@/assets/gifs/FartCoin.gif";
import gif2 from "@/assets/gifs/Flappy Bird.gif";
import gif4 from "@/assets/gifs/Flappy Doge.gif";
import gif5 from "@/assets/gifs/Coin.gif";
import mobileOverlay from "@/assets/mobileAssets/mobile.png";
import pipe1 from "@/assets/mobileAssets/pipe1.svg";
const MobileView = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={gif2}
          alt="GIF 3"
          width={150}
          className="absolute top-[940px] left-[260px]"
        />
        <Image
          src={gif3}
          alt="GIF 3"
          width={130}
          className="absolute top-[1050px] left-[130px]"
        />
        <Image
          src={gif4}
          alt="GIF 3"
          width={130}
          className="absolute top-[1200px] left-[260px]"
        />
        <div className="p-4"> 
          <Image
          src={gif5}
          alt="GIF 3"
          width={100}
          className="absolute top-[1900px] left-[210px]"
        />
          <Image
          src={gif5}
          alt="GIF 3"
          width={100}
          className="absolute top-[1920px] left-[160px]"
        />
          <Image
          src={gif5}
          alt="GIF 3"
          width={100}
          className="absolute top-[1900px] left-[110px]"
        />
       </div>
        {/* SVG with video inside for mobile view */}
        <div className="mobile-video-container relative">
          <svg
            width="428"
            height="1281"
            viewBox="0 0 428 1281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip0_2024_295">
                <path
                  d="M254.656 72.5869C302.145 -12.5504 492.755 -26.0687 552.823 83.301C627.595 42.0747 758.256 63.5991 806.914 153.236C831.78 199.041 873.658 278.736 831.78 410.339C831.78 410.339 918.154 445.801 905.067 612.771C891.98 779.74 731.658 818.793 731.658 818.793C731.658 818.793 606.935 1127.8 309.606 916.787C197.115 1027.69 50.5935 976.843 -24.9999 916.787L-24.9999 590.37L-25 170.623C-25 170.623 26.3698 -32.8285 254.656 72.5869Z"
                  fill="#FF2D84"
                />
              </clipPath>
            </defs>
            <foreignObject
              x="0"
              y="0"
              width="428"
              height="1281"
              clipPath="url(#clip0_2024_295)"
            >
                 <video
            autoPlay
            loop
            muted
            playsInline
            className="mobile-video"
            onLoadedData={() => console.log("Video loaded successfully")}
            onError={(e) => console.error("Error loading video", e)}
          >
            <source src="/loop2.mp4?" type="video/mp4" />
            <source src="/loop2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
              {/* <video autoPlay loop muted className="mobile-video">
                <source src="/loop2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </foreignObject>
          </svg>
          {/* Overlay Image */}
          <div className="mobile-overlay">
            <Image
              src={mobileOverlay}
              alt="Overlay Image"
              className="overlay-image"
              width={800}
            />
          </div>

        </div>
        <Image
          src={pipe1}
          alt="GIF 3"
          width={68}
          className="absolute -z-10 top-[900px] left-[40px]"
        />
          <div className="absolute inset-0 flex items-center justify-center z-10">
                  {/* <Image src={gif2} alt="GIF 2" width={70} className="absolute -top-[770px] left-[5px]" />
                  <Image src={gif1} alt="GIF 3" width={70} className="absolute -top-[840px] left-[60px]" />
                  <Image src={gif3} alt="GIF 4" width={50} className="absolute -top-[840px] left-[180px]" />
                  <Image src={gif4} alt="GIF 5" width={50} className="absolute -top-[840px] left-[270px]" />
                  <Image src={gif5} alt="GIF 5" width={45} className="absolute -top-[817px] left-[320px]" />
                  <Image src={gif5} alt="GIF 5" width={45} className="absolute -top-[810px] left-[340px]" />
                  <Image src={gif5} alt="GIF 5" width={45} className="absolute -top-[817px] left-[360px]" /> */}


                  {/* <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[280px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[220px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[260px]" /> */}
                </div> 

         <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src={gif2} alt="GIF 2" width={100} className="absolute top-[2380px] left-[20px]" />
                  <Image src={gif1} alt="GIF 3" width={100} className="absolute top-[2320px] left-[80px]" />
                  <Image src={gif3} alt="GIF 4" width={80} className="absolute top-[2390px] left-[200px]" />
                  <Image src={gif4} alt="GIF 5" width={80} className="absolute top-[2320px] left-[300px]" />
                  {/* <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[280px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[220px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[2320px] left-[260px]" /> */}
                </div>
      </div>
    </>
  );
};

//     <>
//     <div className="relative">
//       <Image src={gif3} alt="GIF 3" width={100} className="absolute top-[900px] left-[260px]" />
//       <Image src={gif3} alt="GIF 3" width={100} className="absolute top-[1000px] left-[130px]" />
//       <Image src={gif3} alt="GIF 3" width={100} className="absolute top-[1100px] left-[260px]" />

//       {/* SVG with video inside for mobile view */}
//       <div className="mobile-video-container">
//         <svg
//           width="428"
//           height="1281"
//           viewBox="0 0 428 1281"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <clipPath id="clip0_2024_295">
//               <path
//                 d="M254.656 72.5869C302.145 -12.5504 492.755 -26.0687 552.823 83.301C627.595 42.0747 758.256 63.5991 806.914 153.236C831.78 199.041 873.658 278.736 831.78 410.339C831.78 410.339 918.154 445.801 905.067 612.771C891.98 779.74 731.658 818.793 731.658 818.793C731.658 818.793 606.935 1127.8 309.606 916.787C197.115 1027.69 50.5935 976.843 -24.9999 916.787L-24.9999 590.37L-25 170.623C-25 170.623 26.3698 -32.8285 254.656 72.5869Z"
//                 fill="#FF2D84"
//               />
//             </clipPath>
//           </defs>
//           <foreignObject x="0" y="0" width="428" height="1281" clipPath="url(#clip0_2024_295)">
//             <video autoPlay loop muted className="mobile-video">
//               <source src="/loop2.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </foreignObject>
//         </svg>
//       </div>
//     </div>
//   </>
//   );
// };

const DesktopView = () => {
  return (
    <div className="items-center absolute top-[800px] w-full h-[35vh] object-cover lg:h-full">
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
        <div className="video-container">
          {/* Check if the browser is Safari */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
            onLoadedData={() => console.log("Video loaded successfully")}
            onError={(e) => console.error("Error loading video", e)}
          >
            <source src="/loop2.mp4?" type="video/mp4" />
            <source src="/loop2.webm" type="video/webm" />
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
  );
};


// const DesktopView = () => {
//   return (
//     <div className="items-center absolute top-[800px] w-full h-[35vh] object-cover lg:h-full">
//       <div className="container2">
//         <svg width="0" height="0">
//           <defs>
//             <clipPath id="cloudClipPath" clipPathUnits="objectBoundingBox">
//               <path
//                 d="M0.99 0.17C0.99 0.17 0.95 0.02 0.86 0.1C0.84 0.02 0.74 0.03 0.71 0.09C0.67 0.03 0.64 0.05 0.61 0.08C0.6 0.08 0.58 0.08 0.58 0.1C0.55 0.01 0.47 0.02 0.44 0.08C0.4 0.03 0.36 0.03 0.34 0.05C0.32 0.05 0.31 0.06 0.3 0.07C0.3 0.06 0.3 0.05 0.29 0.05C0.26 -0.01 0.15 -0.01 0.13 0.05C0.01 -0.03 0 0.17 0 0.17V0.88C0.04 0.94 0.12 0.99 0.18 0.88C0.26 0.99 0.31 0.95 0.34 0.91C0.37 0.97 0.42 0.95 0.46 0.91C0.56 1 0.61 0.96 0.65 0.91C0.69 0.97 0.73 0.95 0.76 0.91C0.92 1.09 0.99 0.81 0.99 0.81V0.17Z"
//                 transform="scale(1)"
//               />
//             </clipPath>
//           </defs>
//         </svg>
//         <div className="video-container relative right-0">
//         <video
//   autoPlay
//   loop
//   muted
//   playsInline
//   onLoadedData={() => console.log('Video loaded successfully')}
//   onError={(e) => console.error('Error loading video', e)}
// >
//   <source src="/loop2.mp4" type="video/mp4" />
// </video>
//           <div className="overlay">
//             <Image
//               src={VideoImage}
//               alt="Overlay Image"
//               className="overlay-image"
//               width={200}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DesktopView = () => {
//   return (
//     <>
//       <div className="items-center absolute  top-[800px] w-full h-[35vh] object-cover lg:h-full">
//         <div className="container2">
//           <svg width="0" height="0">
//             <defs>
//               <clipPath id="cloudClipPath" clipPathUnits="objectBoundingBox">
//                 <path
//                   d="M0.99 0.17C0.99 0.17 0.95 0.02 0.86 0.1C0.84 0.02 0.74 0.03 0.71 0.09C0.67 0.03 0.64 0.05 0.61 0.08C0.6 0.08 0.58 0.08 0.58 0.1C0.55 0.01 0.47 0.02 0.44 0.08C0.4 0.03 0.36 0.03 0.34 0.05C0.32 0.05 0.31 0.06 0.3 0.07C0.3 0.06 0.3 0.05 0.29 0.05C0.26 -0.01 0.15 -0.01 0.13 0.05C0.01 -0.03 0 0.17 0 0.17V0.88C0.04 0.94 0.12 0.99 0.18 0.88C0.26 0.99 0.31 0.95 0.34 0.91C0.37 0.97 0.42 0.95 0.46 0.91C0.56 1 0.61 0.96 0.65 0.91C0.69 0.97 0.73 0.95 0.76 0.91C0.92 1.09 0.99 0.81 0.99 0.81V0.17Z"
//                   transform="scale(1)"
//                 />
//               </clipPath>
//             </defs>
//           </svg>
//           <div className="video-container relative right-0">
//             <video autoPlay loop muted className="video-element">
//               <source
//                 src="/loop2.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//             <div className="overlay">
//               <Image
//                 src={VideoImage}
//                 alt="Overlay Image"
//                 className="overlay-image"
//                 width={200}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const MiddleSection = () => {
  const isMobileView = useMedia({ maxWidth: 767 });

  return (
    <>
      {isMobileView ? <MobileView /> : <DesktopView />}
    </>
  );
};
export default MiddleSection;
