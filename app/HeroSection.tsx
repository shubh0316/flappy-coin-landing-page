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
import gif6 from "@/assets/gifs/Flappy Pepe.gif";



const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 w-full">
              <Image src={top} alt="Top pipes" className="w-full" />
            </div>
            <div className="mt-4 w-full">
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
                <Image src={logo} alt="Logo" width={600} className="relative z-10" />
                {/* GIFs positioned around the logo */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src={gif2} alt="GIF 2" width={100} className="absolute top-[240px] left-[20px]" />
                  <Image src={gif1} alt="GIF 3" width={100} className="absolute top-[140px] left-[120px]" />
                  <Image src={gif3} alt="GIF 4" width={80} className="absolute top-[180px] left-[270px]" />
                  <Image src={gif4} alt="GIF 5" width={80} className="absolute top-[150px] left-[400px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[240px] left-[460px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[260px] left-[500px]" />
                  <Image src={gif5} alt="GIF 5" width={60} className="absolute top-[240px] left-[540px]" />
                </div>
              </div>
              <Image src={button} alt="" width={300} className="absolute top-1/2 lg:mt-0 md:mt-14 z-10" />
              <p className="absolute top-[390px] text-lg text-center px-4 text-[#E9FCD9]">
                &apos;Flappy Bird&apos; to return after a 10-
                <br />
                year hiatus: the true story behind
                <br />
                the world&apos;s most viral mobile game.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};



export default HeroSection;
