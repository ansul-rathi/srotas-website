import Image from "next/image";
import Link from "next/link";
import Logo from "../header/logo";
import { siteConfig } from "@components/config/config";

const Footer = () => {
  const navigation = {
    home: {
      title: "Home",
      links: [
        { name: "Problem", href: "/problem" },
        { name: "Product Demo", href: "/demo" },
        { name: "Value We Add", href: "/value" },
        { name: "Features", href: "/features" },
        { name: "Our Products", href: "/products" },
      ],
    },
    how: {
      title: "How It Works",
      links: [
        { name: "Text", href: "#" },
        { name: "Text", href: "#" },
        { name: "Text", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Articles", href: "/articles" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
    { name: "X", href: "#", icon: "/icons/x.svg" },
  ];

  return (
    <footer className="bg-[#5C3CE5] relative text-white ml-24"   style={{
        // display: 'flex', flexDirection: 'column',
        backgroundImage: 'url("/images/trial/dot-pattern.svg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
      }}>
      {/* Dotted background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff20_1px,_transparent_1px)] [background-size:16px_16px]" /> */}

      <div className="relative py-[82px] px-[92px]">
        <div className="flex w-full">
          {/* Logo and description */}
          <div className="w-6/12">
            <div className="flex items-center gap-2 mb-4">
              <Logo src={siteConfig.logo} />
            </div>
            <p className="text-sm text-gray-200 max-w-xs mb-6">
              Accelerating clinical research through intelligent patient-trial
              matching and streamlined workflows powered by AI.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href}>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="hover:opacity-80 transition"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {Object.values(navigation).map((section) => (
            <div key={section.title} className="w-2/12">
              <h3 className="font-semibold text-base mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-white transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-white/20 text-end text-sm text-gray-200">
          © 2025 Srotas Health. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
