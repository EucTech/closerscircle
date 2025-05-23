import React from "react";
import { Fade } from "react-awesome-reveal";

const Value = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center gap-10 lg:gap-16 bg-tcolor1/10 py-20 px-5  md:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center font-sf text-center">
        <h1 className="text-[35px] sm:text-[40px] font-[700] text-[#0A0A0A]">
          Our Core Values
        </h1>
      </div>

      <div className="flex items-center justify-center font-lato flex-wrap gap-10">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=""
        >
          <div className="max-w-[350px] h-[160px]  flex flex-col items-start justify-center gap-2 border-2 border-dotted border-[#7A7A7A] rounded-2xl px-5 py-10">
            <h1 className="text-[18px] font-[700] text-[#0A0A0A]">Integrity</h1>
            <p className="text-[14px] font-[400] text-[#3B3B3B]">
              We believe in doing business the right way
            </p>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className=""
        >
          <div className="max-w-[350px] h-[160px]  flex flex-col items-start justify-center gap-2 border-2 border-dotted border-[#7A7A7A] rounded-2xl px-5 py-10">
            <h1 className="text-[18px] font-[700] text-[#0A0A0A]">
              Excellence
            </h1>
            <p className="text-[14px] font-[400] text-[#3B3B3B]">
              We strive for the highest standards in sales and professional
              development.
            </p>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={600}
          direction="up"
          className=""
        >
          <div className="max-w-[350px] h-[160px]  flex flex-col items-start justify-center gap-2 border-2 border-dotted border-[#7A7A7A] rounded-2xl px-5 py-10">
            <h1 className="text-[18px] font-[700] text-[#0A0A0A]">Community</h1>
            <p className="text-[14px] font-[400] text-[#3B3B3B]">
              We foster a supportive environment where participants learn, grow,
              and succeed together.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Value;
