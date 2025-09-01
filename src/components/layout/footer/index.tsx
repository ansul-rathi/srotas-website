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
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM7.43 8.17C7.80998 8.17 8.17403 8.01876 8.44411 7.74867C8.71418 7.47857 8.86542 7.11452 8.86542 6.73454C8.86542 5.94615 8.21881 5.3 7.43 5.3C7.04659 5.3 6.67897 5.45284 6.40653 5.72528C6.13409 5.99772 5.98125 6.36535 5.98125 6.74875C5.98125 7.53719 6.62781 8.17 7.43 8.17ZM8.82 18.5V10.13H6.04V18.5H8.82Z" fill="white"/>
        </svg>
      )
    },
    { 
      name: "X", 
      href: "#", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      className="relative text-white ml-24"
      style={{
        background: '#6B46FF',
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(180deg, #6B46FF 0%, #5B3CE5 100%)
        `,
        backgroundSize: '20px 20px, 100% 100%',
        backgroundPosition: '0 0, 0 0'
      }}
    >
      <div className="relative">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 py-16 ml-[96px]">
          {/* Logo and description section */}
          <div className="w-full lg:w-5/12">
            <div className="mb-6">
              <div className="mb-4">
                <Logo src={siteConfig.logo} height={50} width={120} />
              </div>
              <p className="text-white/90 font-source font-normal text-[16px]">
                Accelerating clinical research through intelligent patient-trial matching and streamlined workflows powered by AI.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Vertical divider - full height */}
          <div className="hidden lg:block relative">
            <div 
              className="absolute top-0 bottom-0 w-px"
              style={{
                height: 'calc(100% + 128px)',
                marginTop: '-64px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.3) 80%, transparent)',
                backgroundSize: '1px 8px',
                backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px)'
              }}
            />
          </div>

          {/* Navigation sections */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {Object.values(navigation).map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold font-dm text-[16px] mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 font-source font-semibold text-[16px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border - full width */}
        <div 
          className="absolute left-0 right-0 border-t"
          style={{
            borderColor: 'rgba(255,255,255,0.2)',
            borderStyle: 'dashed'
          }}
        />
        <div className="pt-6 pb-6 mr-[96px]">
          <p className="text-right text-sm text-white/80">
            © 2025 Srotas Health. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;