"use client"

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { menu } from "@components/config/menu";
import { siteConfig } from "@components/config/config";

const Header = () => {
  const { main } = menu;
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#5C3CE5] border-white border-b-[1px]">
      <nav className="container border-l-[96px] border-[#E2FFBE]">
        <div className="flex items-center justify-between h-20 ml-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <Logo src={siteConfig.logo} /> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-10">
              {main.map((item, i) => (
                <li key={`menu-${i}`} className="relative group">
                  {item.hasChildren ? (
                    <>
                      <button className="inline-flex items-center text-white font-medium hover:text-white/80 transition-all duration-200 py-2">
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl py-3 min-w-[200px] transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                        {item.children?.map((child, j) => (
                          <li key={`child-${j}`}>
                            <Link
                              href={child.url}
                              className="block px-5 py-2.5 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
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
                      className={`text-white hover:text-white/80 transition-all duration-200 py-2 font-dm font-medium text-[16px]
                        ${
                        pathname !== item?.url ? 'text-white border-b-2 border-white' : ''
                      }
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Buttons */}
          {/* {siteConfig.nav_button?.enable && (
            <div className="hidden lg:flex items-center gap-4">
              {siteConfig.nav_login_button && (
                <Link
                  href={siteConfig.nav_login_button.link}
                  className="text-white font-medium hover:text-white/80 transition-colors duration-200"
                >
                  {siteConfig.nav_login_button.label}
                </Link>
              )}
              <Link
                href={siteConfig.nav_button.link}
                className="inline-flex items-center px-6 py-2.5 bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {siteConfig.nav_button.label}
              </Link>
            </div>
          )} */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowMenu(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="lg:hidden fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Logo src={siteConfig.logo} />
              <button
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setShowMenu(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="px-6 py-4">
              {main.map((item, i) => (
                <li key={`mobile-${i}`} className="mb-2">
                  {item.hasChildren ? (
                    <div className="py-2">
                      <span className="font-semibold text-gray-900 text-lg">{item.name}</span>
                      <ul className="pl-4 mt-2 space-y-1">
                        {item.children?.map((child, j) => (
                          <li key={`mobile-child-${j}`}>
                            <Link
                              href={child.url}
                              className="block py-2 text-gray-600 hover:text-purple-600 transition-colors"
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
                      className={`block py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors ${
                        pathname === item.url ? 'text-purple-600' : ''
                      }`}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA Buttons */}
            {siteConfig.nav_button?.enable && (
              <div className="px-6 py-4 border-t border-gray-100 space-y-3">
                {siteConfig.nav_login_button && (
                  <Link
                    href={siteConfig.nav_login_button.link}
                    className="block text-center py-2.5 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    {siteConfig.nav_login_button.label}
                  </Link>
                )}
                <Link
                  href={siteConfig.nav_button.link}
                  className="block text-center py-2.5 px-6 bg-gradient-to-r from-[#6B46C1] to-[#5C3CE5] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() => setShowMenu(false)}
                >
                  {siteConfig.nav_button.label}
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;