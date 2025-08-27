import TopSection from "@components/components/top-section";
import StrugglesLeft from "./StrugglesLeft";

export default function ClinicalTrial() {
  return (
    <section className="">
      {/* Left Column */}
       <TopSection
            badgeIcon="/images/trial/stars.svg"
            badgeText="Product Demo"
            title="Why Clinical Trials Still Struggle?"
            description="Every clinical trial begins with a promise: to bring new treatments to patients faster. But behind the scenes, the reality looks very different."
            imageSrc="/images/analytics-dashboard.png"
            borderColor="#5C3CE5"
            // className="my-8"
            // titleClassName="text-3xl md:text-[40px]"
            // descriptionWidth="w-2/3"
            // imageHeight="h-[500px]"
          />
      <StrugglesLeft />
    </section>
  );
}
