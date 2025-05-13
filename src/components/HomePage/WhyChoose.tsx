import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { MdRealEstateAgent } from "react-icons/md";

const WhyChoose = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#0071bc0a] gap-10 py-20 px-5">
      <h2 className="text-[25px] md:text-[30px] text-center font-[600] text-tcolor2">
        Why Choose Closer&apos;s Circle?
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 ">
        <div className="w-[18em] h-[11em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
          <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
            <MdRealEstateAgent className="text-[#0071BC]" size={20} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-[17px] font-[600]">Real Sales Experience</h3>
            <p className="text-[14px] font-[400] text-[#272525]">
              Gain hands-on experience working on live sales projects with
              partner companies.
            </p>
          </div>
        </div>
        <div className="w-[18em] h-[11em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
          <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
            <GiTeacher className="text-[#0071BC]" size={20} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-[17px] font-[600]">Exclusive Mentorship</h3>
            <p className="text-[14px] font-[400] text-[#272525]">
              Learn directly from industry leaders and gain personalized career
              advice.
            </p>
          </div>
        </div>
        <div className="w-[18em] h-[11em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
          <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
            <FaHandshake className="text-[#0071BC]" size={20} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-[17px] font-[600]">Job Opportunities</h3>
            <p className="text-[14px] font-[400] text-[#272525]">
              Receive priority access to internships and job placements upon
              completion.
            </p>
          </div>
        </div>
        <div className="w-[18em] h-[11em] flex flex-col items-center justify-center gap-3 bg-tcolor1/10 rounded-[8px] px-3 ">
          <div className="size-10 flex items-center justify-center bg-[#0071bc28] rounded-full">
            <LiaAssistiveListeningSystemsSolid className="text-[#0071BC]" size={20} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-[17px] font-[600]">Holistic Learning</h3>
            <p className="text-[14px] font-[400] text-[#272525]">
              Combine professional growth with wellness activities, networking,
              and personal branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
