/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@components/lib/utils";

// If you don't have cn utility, you can use: const cn = (...classes) => classes.filter(Boolean).join(' ')

export default function ManualTrial() {
  return (
    <div
      className={cn("w-full bg-[#5C3CE5]  shadow-sm text-white relative")}
      style={{
        // display: 'flex', flexDirection: 'column',
        backgroundImage: 'url("/images/trial/dot-pattern.svg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
      }}
    >
      <div className={cn("flex flex-col text-center justify-center")}>
        <div className={cn(" py-14")}>
          {/* Title */}
          <h2
            className={cn(
              "mt-4 text-[40px] font-bold pl-10 font-dm text-white"
            )}
          >
            <span className="text-[#E2FFBE]">90% Faster</span> Than Manual Trial
            Matching
          </h2>

          {/* Description */}
          <div className="w-full flex text-center justify-center">
            <p
              className={cn(
                "mt-4 text-[20px] font-semibold text-white px-10 font-dm w-6/12"
              )}
            >
              Connect every patient to the right study instantly, saving 10+
              hours a week and minimizing clinician workload.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full justify-center mb-16">
          <img
            src={"/images/trial/manual-trial.png"}
            alt={"manual-trail"}
            className={cn("object-cover w-[80vw]")}
          />
        </div>
      </div>
      <div className="absolute top-0">
        <img
          src={"/images/trial/wave.svg"}
          alt={"wave"}
          className={cn("object-cover w-full")}
        />
      </div>
    </div>
  );
}

// Example usage with original values:
// export function TopSection() {
//   return (
//     <Section
//       badgeIcon="/images/trial/stars.svg"
//       badgeText="Product Demo"
//       title="See Srotas Health in Action"
//       description="Watch how our AI platform automates the entire recruitment journey - from analyzing real-world data to enrolling qualified patients."
//       imageSrc="/images/trial/img1.png"
//     />
//   );
// }

// // Example with custom styling:
// export function CustomSection() {
//   return (
//     <Section
//       badgeIcon="/images/icons/rocket.svg"
//       badgeText="New Feature"
//       title="Introducing Advanced Analytics"
//       description="Get deep insights into your data with our powerful analytics tools."
//       imageSrc="/images/analytics-dashboard.png"
//       borderColor="#FF6B6B"
//       className="my-8"
//       titleClassName="text-3xl md:text-[40px]"
//       descriptionWidth="w-2/3"
//       imageHeight="h-[500px]"
//     />
//   );
// }
