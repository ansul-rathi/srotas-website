export default function StatsSection() {
  return (
    <section className="w-full border-white border-[1px]">
      <div className="grid md:grid-cols-2">
        {/* Left side */}
        <div className="bg-[#6C47FF] text-white flex items-center justify-center p-10">
          <p className="text-lg leading-relaxed font-dm text-[18px] font-semibold">
            Access to millions of patient records, connected general practices in the UK and India,
            and a broad network of sites, CROs, and sponsors.
          </p>
        </div>

        {/* Right side */}
        <div className="bg-[#F2F2F2] flex items-center justify-center p-10 md:p-16 font-inter">
          <div className="grid grid-cols-3 gap-8 text-center w-full max-w-2xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black">25M+</h2>
              <p className="mt-2 text-sm text-[#5F6D7E] font-source">Patient records</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black">1000+</h2>
              <p className="mt-2 text-sm text-[#5F6D7E] font-source">General practices</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black">25+</h2>
              <p className="mt-2 text-sm text-[#5F6D7E] font-source">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
