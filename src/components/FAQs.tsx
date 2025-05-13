import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className="w-full flex lg:flex-row flex-col items-center lg:items-start justify-center gap-10 lg:gap-20 bg-[#fbaf340e] py-10 px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40">
        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <h1 className="w-full lg:w-[80%] text-[30px] md:text-[40px] font-[700] tracking-tight">
            Frequently asked <span className="text-tpurple">Questions</span>
          </h1>

          <div className="w-full font-sf">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  What is Closer&apos;s Circle?
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  Closer&apos;s Circle is a trimester-based, student-led program
                  at the African Leadership University that trains and certifies
                  elite student sales professionals—also known as &quot;closers.&quot;
                  Through hands-on training, mentorship, and real-world sales
                  experience, we equip students with the tools to become
                  top-tier deal makers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  How long is the program?
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  The program runs for one academic trimester (approximately 3
                  months), during which members go through structured workshops,
                  real-life sales projects, competitive pitch sessions, and
                  engaging wellness and community-building activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  What happens after completing the program?
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  Graduates become certified Closer&apos;s Circle Alumni &
                  Fellows, gaining lifetime access to exclusive opportunities
                  including internships, mentorships, advanced training, and a
                  thriving professional network.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  Who can join Closer&apos;s Circle
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  Closer&apos;s Circle is open to all ALU students—whether
                  you&apos;re an aspiring entrepreneur, business developer,
                  freelancer, or anyone looking to master high-impact
                  communication and sales skills.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  Is there a cost to join?
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  Yes. The program requires a one-time registration fee of
                  15,000 RWF. This fee covers your starter kit (including
                  branded merchandise and training materials), access to all
                  program content, eligibility for certifications, and
                  participation in exclusive community activities like movie
                  nights and health runs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                  Is this program suitable for students with no prior sales
                  experience?
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                  Absolutely! Closer&apos;s Circle is designed for students at all
                  levels. Whether you&apos;re brand new to sales or already have some
                  experience, the program is structured to meet you where you
                  are and help you build the skills needed to excel in any sales
                  environment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <Image
          src="/faqs.jpg"
          alt="faqs image"
          width={1000}
          height={1000}
          className="w-[400px] rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default FAQs;
