import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import TopSectionWithButton from '../top-section-with-button';

const HealthDifferent = () => {
  const topRowFeatures = [
    {
      title: 'AI Agents for Screening',
      description: 'Our AI agent explains trials in plain language to patients, collects prescreen data, and ranks leads for callback which cuts telescreening workload.'
    },
    {
      title: 'Natural Language Feasibility',
      description: 'Query in plain English and receive instant de-identified patient counts, demographics, and site metrics to accelerate trial setup.'
    }
  ];

  const bottomRowFeatures = [
    {
      title: 'Unified Data Integration',
      description: 'Connect seamlessly with EMRs and site databases. Srotas pushes prescreening results directly into CTMS, EDC systems.'
    },
    {
      title: 'Forecast & Analytics AI Dashboards',
      description: 'Interactive AI powered dashboards deliver recruitment forecasts, site performance insights, and real-time progress tracking.'
    },
    {
      title: 'Seamless Messaging & Scheduling',
      description: 'Integrated with patient messaging platforms for automated reminders, appointment booking, and follow-up.'
    }
  ];

  return (
    <div className="">
      <TopSectionWithButton
          badgeIcon="/images/trial/stars.svg"
          badgeText="Core Features"
          title="What Makes Srotas Health Different"
          description="Why Clinical Trial Recruitment Is Still Broken"
          imageSrc="/images/analytics-dashboard.png"
          borderColor="#5C3CE5"
        />
      <div className="">
        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[400]">
          {topRowFeatures.map((feature, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200">
              <CardBody className="p-8">
                <div className="text-center">
                  <h3 className="font-semibold text-[20px] text-[#252424] mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-[14px] text-[#666666] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-[400]">
          {bottomRowFeatures.map((feature, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200">
              <CardBody className="p-8">
                <div className="text-center">
                  <h3 className="font-semibold text-[20px] text-[#252424] mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-[14px] text-[#666666] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthDifferent;