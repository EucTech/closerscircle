import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaHandshake } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#0071bc0a] gap-10 py-20 px-5">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <h2 className="text-[25px] md:text-[30px] text-center font-[600] text-tcolor1">
          Why Join Closer&apos;s Circle?
        </h2>
      </Fade>
      <div className="flex flex-wrap items-center justify-center gap-3 ">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=""
        >
          <div className="w-[18em] h-[14em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
            <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
              <MdRealEstateAgent className="text-[#0071BC]" size={20} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h3 className="text-[17px] font-[600]">
                Real-World Sales Experience
              </h3>
              <p className="text-[14px] font-[400] text-[#272525]">
                Learn and apply sales skills in a dynamic environment with real
                companies.
              </p>
            </div>
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
          <div className="w-[18em] h-[14em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
            <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
              <GiTeacher className="text-[#0071BC]" size={20} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h3 className="text-[17px] font-[600]">
                Exclusive Networking Opportunities
              </h3>
              <p className="text-[14px] font-[400] text-[#272525]">
                Build lasting connections with mentors, fellow students, and
                industry professionals.
              </p>
            </div>
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
          <div className="w-[18em] h-[14em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
            <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
              <FaHandshake className="text-[#0071BC]" size={20} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h3 className="text-[17px] font-[600]">
                Increased Career Opportunities
              </h3>
              <p className="text-[14px] font-[400] text-[#272525]">
                Open doors to internships, job placements, and entrepreneurial
                ventures.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={800}
          direction="up"
          className=""
        >
          <div className="w-[18em] h-[14em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
            <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
              <PiCertificateLight className="text-[#0071BC]" size={20} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h3 className="text-[17px] font-[600]">Certification</h3>
              <p className="text-[14px] font-[400] text-[#272525]">
                Upon completion, receive a Closer&apos;s Circle Certification to
                showcase your new skills.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default WhyJoin;
