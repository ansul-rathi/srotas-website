// // src/components/sections/hero/index.tsx

// import { Button } from "@components/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="relative bg-dark-purple min-h-screen flex items-center">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl">
//           <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Generative AI for Faster Clinical Trials and Better Cancer Care
//           </h1>
//           <p className="text-lg mb-8 text-gray-200">
//             Healthcare and clinical trials sectors must evolve to leverage recent advances in AI...
//           </p>
//           <Button variant="primary">Get Started</Button>
//         </div>
//       </div>
//     </section>
//   )
// }

// import { siteConfig } from "@/config/site";

import { title } from "@components/components/primitives";
// import { Button } from "@components/components/ui/button";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-20 bg-[#120F24]">
      <div className="inline-block max-w-sm lg:max-w-5xl text-center justify-center text-2xl">
        <h1 className={`${title({ color: "blue", size: "lg" })} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600`}>
          Generative AI&nbsp;
        </h1>
        <h1 className={`${title({ size: "lg" })} leading-loose`} style={{ lineHeight: "80px" }}>for Fastest Clinical Trial and Better Cancer Care&nbsp;</h1>
        <div className="flex justify-center items-center">
          <h2 className="font-normal text-white text-base mt-5 py-2 w-1/2" >
            Healthcare and clinical trials sectors must evolve to leverage recent advances in AI. Srotas Health providess researchers and clinicians with tailored AI technology to drive the future of clinical trials and patient care in oncology.
          </h2>
        </div>
        <Button  
        className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white text-base" 
        endContent={
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        }>Get Started</Button>
      </div>
    </section>
  );
}
