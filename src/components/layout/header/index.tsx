"use client"

// import Link from "next/link";
// import { useState } from "react";
// import { Menu as MenuIcon, X,  } from "lucide-react";
// import { menu } from "@components/config/menu";
import Logo from "./logo";
import { siteConfig } from "@components/config/config";

const Header = () => {
  // const { main } = menu;
  // const [showMenu, setShowMenu] = useState(false);
  // const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo src={siteConfig.logo} />

          {/* Desktop Menu */}
          {/* <ul className="hidden lg:flex items-center space-x-8 bg-transparent">
            {main.map((item, i) => (
              <li key={`menu-${i}`} className="relative group">
                {item.hasChildren ? (
                  <>
                    <span className="cursor-pointer inline-flex items-center text-white hover:text-blue-400 transition-colors">
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    </span>
                    <ul className="hidden group-hover:block absolute left-0 top-full bg-[#120F24] shadow-lg py-2 min-w-[160px]">
                      {item.children?.map((child, j) => (
                        <li key={`child-${j}`}>
                          <Link
                            href={child.url}
                            className="block px-4 py-2 text-white hover:bg-[#1a1630] hover:text-blue-400 transition-colors"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className={`text-white hover:text-blue-400 transition-colors ${
                      pathname === item.url ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul> */}

          {/* Desktop Buttons */}
          {/* {siteConfig.nav_button.enable && (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={siteConfig.nav_login_button.link}
                className="inline-flex items-center px-6 py-2 text-white hover:text-blue-400 transition-colors"
              >
                {siteConfig.nav_login_button.label}
              </Link>
              <Link
                href={siteConfig.nav_button.link}
                className="inline-flex items-center h-[48px] px-6 py-2 border border-[#FFFFFF1A] text-white bg-white/10 transition-colors gap-5 hover:text-blue-400 hover:border-blue-400"
                >
                {siteConfig.nav_button.label}
              </Link>
            </div>
          )} */}

          {/* Mobile Menu Button */}
          {/* <button
            className="lg:hidden text-white p-2"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <X size={24} /> : <MenuIcon size={24} />}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {showMenu && (
          <div className="lg:hidden absolute z-50 left-0 right-0 bg-[#120F24] shadow-lg">
            <ul className="px-4 py-2">
              {main.map((item, i) => (
                <li key={`mobile-${i}`} className="border-b border-white/10 last:border-0">
                  {item.hasChildren ? (
                    <div className="py-3">
                      <span className="font-medium text-white">{item.name}</span>
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.children?.map((child, j) => (
                          <li key={`mobile-child-${j}`}>
                            <Link
                              href={child.url}
                              className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                              onClick={() => setShowMenu(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.url}
                      className="block py-3 text-white hover:text-blue-400 transition-colors"
                      onClick={() => setShowMenu(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </nav>
    </header>
  );
};

export default Header;