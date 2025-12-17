"use client";

import StakeholderSection from "@components/components/sections/clinicat-research";
import ClinicalTrial from "@components/components/sections/clinicat-trial";
import HealthDifferent from "@components/components/sections/health-different";
import HealthInAction from "@components/components/sections/health-in-action";
import Hero from "@components/components/sections/hero";
import ManualTrial from "@components/components/sections/manual-trial";
import NewsletterSection from "@components/components/sections/news-letter";
import StatsSection from "@components/components/sections/stats";

export default function Home() {
  return (
    <main>
      <div
      // style={{
      //   display: 'flex', flexDirection: 'column',
      //   backgroundImage: 'url("/images/bg.webp")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        <div className="bg-[#5C3CE5] pl-24">
          <Hero />
        </div>
        <div className="">
          <StatsSection />
        </div>
        <div className="bg-white">
          <ClinicalTrial />
        </div>
        <div className="bg-white pl-24">
          <HealthInAction />
        </div>
        <div className="bg-white pl-24">
          <StakeholderSection />
        </div>
        <div className="bg-white pl-24">
          <ManualTrial />
        </div>
        <div className="bg-white pl-24">
          <HealthDifferent />
        </div>
        <div className="bg-white pl-24 border-l-[]">
          <NewsletterSection />
        </div>
        {/* <LayeredVideoContainer /> */}
      </div>
      {/* <Problem
        badge="Top 100 DeepTech Startup :"
        title="Today's Approaches Are Failing Clinicians and Patients"
        statistics={customStats}
        conclusion="Clinicians deserve better tools. Patients deserve better outcomes."
        direction="start"
        video='problem'

      />

      <Problem
        badge="Better Tools, Better Outcomes"
        title="Pioneering AI-driven Solutions for Clinical Care and Research"
        // statistics={customStats}
        conclusion="We provide a generative AI platform designed specifically for improving oncology trials and giving clinicians the information they need to provide optimal patient care. The Srotas Engine comprises a suite of LLMs trained on biomedical data to improve clinical trial design and medical decision-making. Clinicians can create a clear and comprehensive clinical picture of individual patients from complex, fragmented data while safeguarding data privacy and ensuring regulatory compliance."
        direction="end"
        video='solution'
      />
      <AIToolsSection />
      <ContactSection /> */}
    </main>
  );
}
