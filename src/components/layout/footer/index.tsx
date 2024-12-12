import Image from "next/image";
import Link from "next/link";
import Logo from "../header/logo";
import { siteConfig } from "@components/config/config";

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
    <footer className="bg-[#100d20] py-8 sm:py-12 md:py-16">
      <div className="max-w-[90%] mx-auto lg:max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="max-w-[200px] mb-4">
              <Logo src={siteConfig.logo} />
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 mt-4 max-w-md">
              Generative AI for Faster Clinical Trials and Better Cancer Care
            </p>
          </div>

          {/* Navigation Links */}
          {Object.values(navigation).map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-white font-medium text-base sm:text-lg mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-light block py-1"
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
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base order-2 sm:order-1">
              ©2024 - Srotas-Health
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 order-1 sm:order-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Image 
                    src={`/icons/${social.icon}`} 
                    alt={social.name} 
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;