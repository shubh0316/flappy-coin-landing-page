import HeroSection from "./HeroSection";
import MiddleSection from "./MiddleSection";
import ThirdSection from "./ThirdSection";
import Footer from "./footer";

export default function Home() {
  return (
   <>
   <div className="overflow-x-hidden">
   <HeroSection />
    <MiddleSection />
   <ThirdSection />
   <Footer />  
    </div>
   </>
  );
}
