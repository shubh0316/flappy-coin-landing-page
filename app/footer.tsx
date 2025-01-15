"use client"
import Image from "next/image";
import footerPipes from "@/assets/new2.png";
import logo from "@/assets/logo.png";
import buttons from "@/assets/buttonIcons.png";
import Container from "./container";
import useMedia from "use-media";
import logoMobile from "@/assets/mobileAssets/logo.png";
import button from "@/assets/buttonIcons.png";
import footer from "@/assets/mobileAssets/footer.png";
const MobileView = () => {
    return (
        <> 
{/* <div
      className="absolute top-[3000px] z-10 bg-cover bg-no-repeat bg-center w-full h-full "
      style={{ backgroundImage: `url(${footer.src})` }}
    > */}
      <div className="flex flex-col justify-between items-center mt-40">
        <div className="flex flex-col items-center mb-10">
          <Image src={logoMobile} alt="Logo" className="w-[300px]" />
          <div className="mt-4">
            <Image src={button} alt="Button" className="w-[300px]" />
          </div>
        </div>
      </div>
    </>
    );
}
const DesktopView = () => {
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

const Footer = () => {
    const isMobileView = useMedia({ maxWidth: 767 });
  
    return <>{isMobileView ? <MobileView /> : <DesktopView />}</>;
  };
  
  export default Footer;