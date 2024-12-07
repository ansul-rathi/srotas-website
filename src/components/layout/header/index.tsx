"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { menu } from "@components/config/menu";
import Logo from "./logo";
import { siteConfig } from "@components/config/config";

const Header = () => {
  const { main } = menu;
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY > 0);
      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-20"></div>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${sticky ? "bg-white shadow-md" : "bg-transparent"} 
          ${direction === 1 ? "-translate-y-full" : "translate-y-0"}`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo src={siteConfig.logo} />

            <ul className={`hidden lg:flex items-center space-x-8 ${sticky ? "text-black" : "text-black"}`}>
              {main.map((item, i) => (
                <li key={`menu-${i}`} className="relative group">
                  {item.hasChildren ? (
                    <>
                      <span className="cursor-pointer inline-flex items-center hover:text-gray-600">
                        {item.name}
                        <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <ul className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg py-2 min-w-[160px]">
                        {item.children?.map((child, j) => (
                          <li key={`child-${j}`}>
                            <Link
                              href={child.url}
                              className="block px-4 py-2 hover:bg-gray-50 hover:text-gray-600"
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
                      className={`hover:text-gray-600 ${pathname === item.url ? "text-white" : ""}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {siteConfig.nav_button.enable && (
              <Link
                href={siteConfig.nav_button.link}
                className="hidden lg:inline-flex items-center px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                {siteConfig.nav_button.label}
              </Link>
            )}

            <button
              className="lg:hidden text-black"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
              <ul className="px-4 py-2">
                {main.map((item, i) => (
                  <li key={`mobile-${i}`} className="py-2">
                    {item.hasChildren ? (
                      <>
                        <span className="font-medium">{item.name}</span>
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.children?.map((child, j) => (
                            <li key={`mobile-child-${j}`}>
                              <Link
                                href={child.url}
                                className="text-gray-600 hover:text-black"
                                onClick={() => setShowMenu(false)}
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
                        className="text-black hover:text-gray-600"
                        onClick={() => setShowMenu(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;