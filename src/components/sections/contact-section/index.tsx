"use client";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20" style={{
      backgroundImage: 'url("/images/bg.png")', // Update with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-semibold text-white leading-tight">
                Ready to See the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#2563EB]">
                  Future of Oncology?
                </span>              </h2>
              <p className="mt-4 text-gray-400">
                Say goodbye to generic AI tools and embrace three LLMs purpose-built
                for research and clinical excellence.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 p-6">
                <p className="text-gray-400 text-sm mb-2">LOCATION</p>
                <p className="text-white text-xl">82 Muscat Street, Sydney 🇦🇺</p>
              </div>

              <div className="bg-white/10 p-6">
                <p className="text-sm text-gray-400 mb-2">CALL US</p>
                <p className="text-white text-xl">+61 (08) 9079 8383</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/15 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-white mb-2">Get connected</h3>
              <p className="text-white">
                Let work together to transform patient care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full h-14 px-4 bg-white/15 text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full h-14 px-4 bg-white/15 text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 px-4 bg-white/15 text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-14 px-4 bg-white/15 text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                // className="w-full h-14 px-4  text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none"
                className="w-full p-4 bg-white/15 text-white text-lg placeholder-white placeholder:opacity-60 focus:outline-none resize-none min-h-[160px]"
              />

              <button
                type="submit"
                className="w-full bg-[#6936F4] text-white h-14 text-lg hover:bg-[#622df7] transition-colors"
              >
                Contact us
              </button>
            </form>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;