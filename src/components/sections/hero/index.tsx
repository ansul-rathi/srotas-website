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
import { Button } from "@components/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-20 mb-20">
      <div className="inline-block max-w-sm lg:max-w-5xl text-center justify-center text-2xl">
        <h1 className={title({ color: "blue", size: "lg" })}>
          Generative AI&nbsp;
        </h1>
        <h1 className={title({ size: "lg"})}>for Fastest Clinical Trial and Better Cancer Care&nbsp;</h1>
        <h2 className="font-normal text-white text-base mt-5 py-2">
          Beautiful, fast and modern Easy UI template.
        </h2>
        <Button variant="primary" className="mt-5">Get Started</Button>
      </div>
    </section>
  );
}
