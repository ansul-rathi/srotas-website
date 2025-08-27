/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Building2 } from "lucide-react"

const sections = [
  {
    title: "Research Sites",
    description:
      "Accelerate enrollment with instant patient-trial matching powered by AI. Streamline recruitment workflows so your team can focus on engaging qualified candidates.",
    icon: Building2,
  },
  {
    title: "Pharma",
    description:
      "Access diverse, representative patient populations and optimize site selection. Reduce startup delays and boost trial success with real-time, data-driven insights.",
    icon: Building2,
  },
  {
    title: "CROs",
    description:
      "Automate manual screening and pre-screening steps for faster, higher quality recruitment. Track progress, compliance, and site performance in one unified platform.",
    icon: Building2,
  },
  {
    title: "Hospitals",
    description:
      "Connect more patients to advanced clinical trials without administrative overhead. Enable your clinicians to identify and refer eligible participants seamlessly using AI-driven tools.",
    icon: Building2,
  },
]

export default function StakeholderCards() {
  return (
    <div className="grid grid-cols-2 border-l-[1px]  border-[#5F6D7E]">
      {sections.map((item, idx) => {
        return (
          <div key={idx} className="flex items-start gap-4 border-b-[1px]  border-[#5F6D7E]">
            <div className="px-12 py-16 bg-[#F7F7F7]">
            {/* <Icon className="w-8 h-8 text-purple-600" /> */}
            <img 
            src="/images/trial/research.svg"
            height={100}
            width={100}
            />
            </div>
            <div className="py-6">
              <h3 className="font-dm font-bold text-[28px] text-[#252424]">{item.title}</h3>
              <p className="font-helvetica font-normal text-[16px] text-[#252424]">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
