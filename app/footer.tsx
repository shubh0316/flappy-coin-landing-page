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
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
                    
                            <Image src={logo} alt="Centered Logo" width={400} />
                            <Image src={buttons} alt="Buttons" width={300} />
                        </div>
                    </div>
                </div>
              
            </Container>
        </>
    );
};

export default Footer;
