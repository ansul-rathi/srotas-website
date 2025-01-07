import AIToolsSection from '@components/components/sections/ai-Tools';
import ContactSection from '@components/components/sections/contact-section';
import Hero from '@components/components/sections/hero'
import LayeredVideoContainer from '@components/components/sections/layered-video-container';
import Problem from '@components/components/sections/problem';

export default function Home() {
  const customStats = [
    { text: "80% of oncology trials face delays" },
    { text: "6% of patients are enrolled in trials" },
    { text: "Clinicians spend 35% of their time on EHR documentation" },
    { text: "Unstructured data is challenging to manage and parse" },
    { text: "Clinicians lack real-time insights" }
  ];

  return (
    <main>
      <Hero />
      <LayeredVideoContainer />
      <Problem
        badge="Top 100 DeepTech Startup :"
        title="Today's Approaches Are Failing Clinicians and Patients"
        statistics={customStats}
        conclusion="Clinicians deserve better tools. Patients deserve better outcomes."
        direction="start"
        video={{ link: '/video/problem.gif', alt: 'problem' }}

      />

      <Problem
        badge="Better Tools, Better Outcomes"
        title="Pioneering AI-driven Solutions for Clinical Care and Research"
        // statistics={customStats}
        conclusion="We provide a generative AI platform designed specifically for improving oncology trials and giving clinicians the information they need to provide optimal patient care. The Srotas Engine comprises a suite of LLMs trained on biomedical data to improve clinical trial design and medical decision-making. Clinicians can create a clear and comprehensive clinical picture of individual patients from complex, fragmented data while safeguarding data privacy and ensuring regulatory compliance."
        direction="end"
        video={{ link: '/video/solution.gif', alt: 'solution' }}
      />
      <AIToolsSection />
      <ContactSection />
    </main>
  )
}
