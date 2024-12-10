import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigation = {
    product: {
      title: "Product",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "Insight Match", href: "/insight-match" },
        { name: "Integrations", href: "/integrations" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help", href: "/help" },
      ],
    },
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook.svg" },
    { name: "Twitter", href: "#", icon: "twitter.svg" },
    { name: "Instagram", href: "#", icon: "instagram.svg" },
  ];

  return (
    <footer className="bg-[#100d20] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Srotas Health" 
                width={40} 
                height={40} 
              />
              {/* <span className="text-white font-bold text-xl">
                SROTAS HEALTH
              </span> */}
            </div>
            <p className="text-gray-400 mb-6">
              Generative AI for Faster Clinical Trials and Better Cancer Care
            </p>
          </div>

          {/* Navigation Links */}
          {Object.values(navigation).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-normal text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            ©2024 - Srotas-Health
          </p>
          
          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <Image 
                  src={`/icons/${social.icon}`} 
                  alt={social.name} 
                  width={20} 
                  height={20} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;