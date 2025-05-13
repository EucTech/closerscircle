import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HomePage/HeroSection";
import ProgramStructure from "@/components/HomePage/ProgramStructure";
import Speaker from "@/components/HomePage/Speaker";
import WhatIsClosersCircle from "@/components/HomePage/WhatIsClosersCircle";
import WhyChoose from "@/components/HomePage/WhyChoose";
import WhyApply from "@/components/WhyApply";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection/>
      <WhatIsClosersCircle/>
      <WhyChoose/>
      <ProgramStructure/>
      <Speaker/>
      <FAQs/>
      <WhyApply/>
    </div>
  );
}
