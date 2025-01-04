import React from "react";
import pipes from "@/assets/new.png";
import Image from "next/image";
import photo from "@/assets/phoneGroup.png";
import Container from "./container";

const ThirdSection = () => {
  return (
    <>
      <Container>
        {/* Keeping the original pipe positioning */}
        <div className="relative"> {/* Added relative positioning */}
          <div className="absolute -z-10 right-8 md:top-[1200px] lg:top-[300px] sm:top-[800px] sm:right-0 sm:left-0 sm:mx-auto">
            <Image src={pipes} alt="Background Pipes" className="mx-auto" />
          </div>

          {/* Phone group with controlled scaling */}
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
        </div>
      </Container>
    </>
  );
};

export default ThirdSection;
