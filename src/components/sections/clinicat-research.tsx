import React from "react";
import { BarChart3 } from "lucide-react";
import TopSection from "../top-section";

const StackHolderSection = () => {
  const services = [
    {
      title: "Sites",
      description:
        "AI Agents Cut down Screening time by 9000x and Trial Matching from 30 Minutes to 0.2 Seconds. Frees up staff time to focus on patients while boosting enrollment success.",
    },
    {
      title: "CROs",
      description:
        "Leverage a network of 1,000+ UK GPs and 2,500 Indian sites to speed up feasibility and recruitment. Monitor site level performance with realtime AI dashboards.",
    },
    {
      title: "Pharma",
      description:
        "Validate study feasibility upfront with access to 25M+ patient records. Identify the best-fit CROs and sites, forecast enrollment, and reduce trial costs.",
    },
  ];

  return (
    <div className="bg-white" style={{
        backgroundImage: 'url("/images/trial/grid.svg")',
      }}>
      <TopSection
        badgeIcon="/images/trial/stars.svg"
        badgeText="Who We Help"
        title="Empowering Every Stakeholder in Clinical Research"
        description="Making clinical research more accessible, efficient, and impactful for everyone."
        imageSrc="/images/analytics-dashboard.png"
        borderColor="#5C3CE5"
      />
      <div className="border-[1px] border-gray-300 py-[52px] px-[240px]">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="bg-[#F7F7F7] p-[38px]">
                  <BarChart3 className="w-6 h-6 text-[#5C3CE5]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-dm font-semibold text-[24px] text-[#252424]">
                  {service.title}
                </h3>
                <p className="font-source font-normal text-[16px] text-[#252424]">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Dotted connector line - only show between cards, not after the last one */}
            {index < services.length - 1 && (
              <div className="flex justify-start ml-12">
                <div className="w-1.5 h-24 border-l-2 border-dashed border-[#6C39ED]"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackHolderSection;
