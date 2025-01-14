"use client"
import FlappyButton from "./components/button";
import twitter from "@/assets/twitter.png";
import game from "@/assets/game.png";
import FlappyRoundedButton from "./components/RoundButton";
import Image from "next/image";
import top from "@/assets/top.png";
import bottom from "@/assets/bottom.png";
import logo from "@/assets/logo2.png";
import button from "@/assets/buttonIcons.png";
import Container from "./container";
import gif1 from "@/assets/gifs/FartCoin.gif";
import gif2 from "@/assets/gifs/Flappy Bird.gif";
import gif3 from "@/assets/gifs/Flappy Pepe.gif";
import gif4 from "@/assets/gifs/Flappy Doge.gif";
import gif5 from "@/assets/gifs/Coin.gif";
// import ecllipse from "@/assets/mobileAssets/ellipse.png";
import logoMobile from "@/assets/mobileAssets/logo.png";
import useMedia from 'use-media';
import buttonMain from "@/assets/mobileAssets/button.png";
// import mobilePipe from "@/assets/mobileAssets/pipe.svg";
const MobileView = () => {
  return (
    <>
        <div className="flex flex-col justify-around items-center space-y-">  
      <Image src={logoMobile} alt="Logo" className=" mt-12 w-[300px]" />
      <p className="text-xl text-center  px-10 mt-4 text-[#E9FCD9] text-shadow-xl text-stroke" style={{ WebkitTextStrokeColor: '#000000' }}>
  &apos;Flappy Bird&apos; to return after a 10-year hiatus: the true story behind
  the world&apos;s most viral mobile game.</p>
  <Image src={buttonMain} alt="" className="mt-8 w-[180px]" />
  <Image src={gif3} alt="GIF 2" width={200} className="" />
  <div className="flex gap-4 ">
           
              <FlappyRoundedButton content="twitter" imageSrc={twitter} />
              <FlappyRoundedButton content="game" imageSrc={game} />
            </div>
            <div className="flex  flex-col gap-4 mt-10">
           
            <FlappyButton content="buy flappycoin" />
            <FlappyButton content="play flappycoin" />
         </div>
         <Image src={button} alt="" width={300} className="mt-10 z-10" />
  </div>
  </>
  
  );
}

//url left
const DesktopView  = () => {
  return (
    <>
      <Container>
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 w-full">
              <Image src={top} alt="Top pipes" className="w-full" />
            </div>
            <div className="mt-10 w-full">
              <Image src={bottom} alt="Bottom pipes" className="w-full" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center h-full">
            <div className="flex gap-4 mt-10">
              <FlappyButton content="buy flappycoin" />
              <FlappyButton content="play flappycoin" />
              <FlappyRoundedButton content="twitter" imageSrc={twitter} />
              <FlappyRoundedButton content="game" imageSrc={game} />
            </div>
            <div className="relative flex flex-col items-center space-y-20">
              {/* Logo with GIFs around it */}
              <div className="relative">
                <Image src={logo} alt="Logo" width={700} className="relative z-10" />
                {/* GIFs positioned around the logo */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src={gif2} alt="GIF 2" width={100} className="absolute top-[320px] left-[20px]" />
                  <Image src={gif1} alt="GIF 3" width={100} className="absolute top-[220px] left-[120px]" />
                  <Image src={gif3} alt="GIF 4" width={80} className="absolute top-[180px] left-[270px]" />
                  <Image src={gif4} alt="GIF 5" width={80} className="absolute top-[210px] left-[400px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[240px] left-[500px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[260px] left-[540px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[240px] left-[580px]" />
                </div>
              </div>
              <Image src={button} alt="" width={300} className="absolute top-1/2 lg:mt-0 md:mt-14 z-10" />
              <p className="absolute top-[440px] text-lg text-center px-4 text-[#E9FCD9] text-shadow-xl text-stroke" style={{ WebkitTextStrokeColor: '#000000' }}>
  &apos;Flappy Bird&apos; to return after a 10-
  <br />
  year hiatus: the true story behind
  <br />
  the world&apos;s most viral mobile game.
</p>
<Image src={buttonMain} alt="" className="absolute top-[560px] w-[180px]" />




            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const HeroSection = () => {
  const isMobileView = useMedia({ maxWidth: 767 });

  return (
    <>
               {isMobileView ? <MobileView /> : <DesktopView />}
    </>
  )

}

export default HeroSection;