/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ProblemStatement from "@components/components/common/ProblemStatement";
import Lottie from "lottie-react";
import problem from '../../../assets/problem.json'
import solution from '../../../assets/solution.json'

interface StatisticItem {
  text: string;
}

interface ProblemProps {
  badge?: string;
  title: string;
  statistics?: StatisticItem[];
  conclusion: string;
  direction: 'start' | 'end';
  video: string ;
}

const Problem: React.FC<ProblemProps> = ({
  badge = "Better Tools, Better Outcomes",
  title = "Today's Approaches Are Failing Clinicians and Patients",
  statistics = [],
  conclusion,
  direction,
  video
}) => {

  return (
    <section className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`flex flex-col ${direction === 'start' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12`}          >
          {/* Problem Statement Component */}
          <ProblemStatement
            badge={badge}
            title={title}
            statistics={statistics}
            conclusion={conclusion}
          />

          {/* Video/Animation Placeholder */}
          <div className="w-full lg:w-4/12">
            <div className="bg-white rounded-lg relative overflow-hidden shadow-lg aspect-square flex items-center justify-center">
              {/* <p className="text-gray-500 text-xl">Video or animation</p> */}
              {/* <Image
                src={video.link}
                alt={video.alt}
                fill
                className="object-contain rounded "
                priority
                unoptimized
              /> */}
              <Lottie 
                animationData={video==="solution" ? solution : problem}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem 