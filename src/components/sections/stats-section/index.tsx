// components/sections/landing/StatsSection.tsx
const StatsSection = () => {
  const stats = [
    {
      value: "100X",
      label: "FASTER SUBJECT IDENTIFICATIONS"
    },
    {
      value: "66%",
      label: "DECREASE RETENTION COSTS"
    },
    {
      value: "70%",
      label: "REDUCE SETUP TIMES"
    }
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${index !== stats.length - 1 ? 'md:border-r md:border-gray-200' : ''
                }`}
            >
              <h3 className="text-5xl md:text-6xl lg:text-6xl font-semibold mb-4 text-black">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;