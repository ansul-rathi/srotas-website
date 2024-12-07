// components/ProblemStatementSection.tsx
import React from 'react';

interface StatisticItem {
  text: string;
}

interface ProblemStatementProps {
  badge?: string;
  title: string;
  statistics: StatisticItem[];
  conclusion: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({
  badge = "Better Tools, Better Outcomes",
  title = "Today's Approaches Are Failing Clinicians and Patients",
  statistics = [],
  conclusion,
}) => {
  return (
    <div className="w-full lg:w-1/2 pr-8">
      {/* Badge */}
      <div className="inline-block mb-8">
        <span className="bg-white px-6 py-2 rounded-full text-[#5E43EC] text-sm font-normal">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-4xl text-black font-semibold tracking-tight leading-loose mb-8">
        {title}
      </h2>

      {/* Statistics List */}
      <ul className="space-y-2 mb-5">
        {statistics.map((stat, index) => (
          <li 
            key={index}
            className="flex items-start space-x-1 text-sm text-gray-700"
          >
            <span className="text-gray-400">•</span>
            <span>{stat.text}</span>
          </li>
        ))}
      </ul>

      {/* Conclusion */}
      <p className="text-sm text-gray-800">
        {conclusion}
      </p>
    </div>
  );
};

export default ProblemStatement;