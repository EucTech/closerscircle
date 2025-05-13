import React from "react";
import { Fade } from "react-awesome-reveal";

const OurMission = () => {
  return (
    <div className="w-full flex items-center justify-center py-20 px-5">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className="w-full sm:w-[70%]"
      >
        <div className=" flex flex-col gap-3 items-center justify-center text-center">
          <h2 className="text-tcolor1 font-[600] text-[28px]">Our Mission</h2>
          <p className="text-black font-[400] text-[15px]">
            To empower the next generation of sales professionals by providing
            hands-on training, expert mentorship, and a thriving network. Our
            goal is to equip individuals with the sales strategies, tools, and
            confidence needed to succeed in any career or entrepreneurial
            venture.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default OurMission;
