"use client"
import Image from "next/image";
import footerPipes from "@/assets/new2.png";
import logo from "@/assets/logo.png";
import buttons from "@/assets/buttonIcons.png";
import Container from "./container";
const Footer = () => {
    return (
        <>
            <Container>
                <div className="relative w-full flex flex-col justify-center items-center">
                    <div className="w-full mx-auto">
                        <div className="w-full">
                            <Image src={footerPipes} alt="Footer Pipes" className="w-full" />
                        </div>
                        <div className="absolute bg-red-500 bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
                            <svg width="0" height="0">
                                <defs>
                                    <clipPath id="footerClipPath" clipPathUnits="objectBoundingBox">
                                        <rect
                                            x="5"
                                            y="44.6147"
                                            width="367.445"
                                            height="225.917"
                                            rx="18"
                                            transform="rotate(-6.50295 5 44.6147)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="video-container2 relative">
                                <video autoPlay loop muted className="video-element">
                                    <source src="/vedio2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <Image src={logo} alt="Centered Logo" width={400} />
                            <Image src={buttons} alt="Buttons" width={300} />
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .video-container2 {
                        width: 100%;
                        height: auto;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: blue;
                    }

                    .video-element1 {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        background-color: yellow;
                        clip-path: url(#footerClipPath);
                        -webkit-clip-path: url(#footerClipPath);
                    }
                `}</style>
            </Container>
        </>
    );
};

export default Footer;
