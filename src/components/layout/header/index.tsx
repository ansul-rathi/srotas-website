// "use client"

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { Menu as MenuIcon, X } from "lucide-react";
// import { menu } from "@components/config/menu";
// import Logo from "./logo";
// import { siteConfig } from "@components/config/config";

// const Header = () => {
//   const { main } = menu;
//   const [showMenu, setShowMenu] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [direction, setDirection] = useState<number | null>(null);
//   const pathname = usePathname();

//   // useEffect(() => {
//   //   const header = headerRef.current;
//   //   if (!header) return;

//   //   const headerHeight = header.clientHeight + 200;
//   //   let prevScroll = 0;

//   //   const handleScroll = () => {
//   //     const scrollY = window.scrollY;
//   //     setSticky(scrollY > 0);
//   //     if (scrollY > headerHeight) {
//   //       prevScroll > scrollY ? setDirection(-1) : setDirection(1);
//   //       prevScroll = scrollY;
//   //     } else {
//   //       setDirection(null);
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   useEffect(() => {
//     const header = headerRef.current;
//     if (!header) {
//       return; // Add a return statement here
//     }
  
//     const headerHeight = header.clientHeight + 200;
//     let prevScroll = 0;
  
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setSticky(scrollY > 0);
//       if (scrollY > headerHeight) {
//         prevScroll > scrollY ? setDirection(-1) : setDirection(1);
//         prevScroll = scrollY;
//       } else {
//         setDirection(null);
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       {/* <div className="h-20"></div> */}
//       <header
//         ref={headerRef}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
//           ${direction === 1 ? "-translate-y-full" : "translate-y-0"}`}
//         style={{
//           backgroundImage: 'url("/images/bg.png")', // Update with your image path
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <nav className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <Logo src={siteConfig.logo} />

//             <ul className="hidden lg:flex items-center space-x-8">
//               {main.map((item, i) => (
//                 <li key={`menu-${i}`} className="relative group">
//                   {item.hasChildren ? (
//                     <>
//                       <span className={`cursor-pointer inline-flex items-center hover:text-blue-400 ${sticky ? 'text-white' : 'text-white'}`}>
//                         {item.name}
//                         <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20">
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </span>
//                       <ul className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg py-2 min-w-[160px]">
//                         {item.children?.map((child, j) => (
//                           <li key={`child-${j}`}>
//                             <Link
//                               href={child.url}
//                               className="block px-4 py-2 text-white hover:bg-gray-50 hover:text-blue-400"
//                             >
//                               {child.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={item.url}
//                       className={`hover:text-blue-400 ${pathname === item.url
//                         ? sticky ? 'text-white' : 'text-white'
//                         : sticky ? 'text-white' : 'text-white'
//                         }`}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {siteConfig.nav_button.enable && (
//               <div className="hidden lg:flex items-center gap-4"> {/* Added container with gap-4 */}
//                 <Link
//                   href={siteConfig.nav_button.link}
//                   className={`hidden lg:inline-flex items-center px-6 py-2 transition-colors ${sticky
//                     ? ' text-white hover:bg-white hover:text-white'
//                     : ' text-white hover:bg-white hover:text-white'
//                     }`}                >
//                   {siteConfig.nav_login_button.label}
//                 </Link>
//                 <Link
//                   href={siteConfig.nav_button.link}
//                   className={`hidden lg:inline-flex items-center px-6 py-2 border transition-colors ${sticky
//                     ? 'border-white text-white hover:bg-white hover:text-white'
//                     : 'border-white text-white hover:bg-white hover:text-white'
//                     }`}
//                 >
//                   {siteConfig.nav_button.label}
//                 </Link>
//               </div>
//             )}

//             <button
//               className={`lg:hidden ${sticky ? 'text-white' : 'text-white'}`}
//               onClick={() => setShowMenu(!showMenu)}
//             >
//               {showMenu ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {showMenu && (
//             <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
//               <ul className="px-4 py-2">
//                 {main.map((item, i) => (
//                   <li key={`mobile-${i}`} className="py-2">
//                     {item.hasChildren ? (
//                       <>
//                         <span className="font-medium text-white">{item.name}</span>
//                         <ul className="pl-4 mt-2 space-y-2">
//                           {item.children?.map((child, j) => (
//                             <li key={`mobile-child-${j}`}>
//                               <Link
//                                 href={child.url}
//                                 className="text-blue-400 hover:text-white"
//                                 onClick={() => setShowMenu(false)}
//                               >
//                                 {child.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.url}
//                         className="text-white hover:text-blue-400"
//                         onClick={() => setShowMenu(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;

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
    if (!header) {
      return;
    }

    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY > 0);
      if (scrollY > headerHeight) {
        setDirection(prevScroll > scrollY ? -1 : 1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-bg
    ${direction === 1 ? "-translate-y-full" : "translate-y-0"}`;

  const headerStyle = {
    backgroundImage: `url('/images/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } as const;

  return (
    <header ref={headerRef} className={headerClasses} style={headerStyle}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo src={siteConfig.logo} />

          <ul className="hidden lg:flex items-center space-x-8">
            {main.map((item, i) => (
              <li key={`menu-${i}`} className="relative group">
                {item.hasChildren ? (
                  <>
                    <span className={`cursor-pointer inline-flex items-center hover:text-blue-400 ${
                      sticky ? 'text-white' : 'text-white'
                    }`}>
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
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-blue-400"
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
                    className={`hover:text-blue-400 ${
                      pathname === item.url
                        ? sticky ? 'text-white' : 'text-white'
                        : sticky ? 'text-white' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {siteConfig.nav_button.enable && (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={siteConfig.nav_login_button.link}
                className={`inline-flex items-center px-6 py-2 transition-colors ${
                  sticky
                    ? 'text-white hover:bg-white hover:text-gray-800'
                    : 'text-white hover:bg-white hover:text-gray-800'
                }`}
              >
                {siteConfig.nav_login_button.label}
              </Link>
              <Link
                href={siteConfig.nav_button.link}
                className={`inline-flex items-center px-6 py-2 border transition-colors ${
                  sticky
                    ? 'border-white text-white hover:bg-white hover:text-gray-800'
                    : 'border-white text-white hover:bg-white hover:text-gray-800'
                }`}
              >
                {siteConfig.nav_button.label}
              </Link>
            </div>
          )}

          <button
            className={`lg:hidden ${sticky ? 'text-white' : 'text-white'}`}
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
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.children?.map((child, j) => (
                          <li key={`mobile-child-${j}`}>
                            <Link
                              href={child.url}
                              className="text-gray-600 hover:text-blue-400"
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
                      className="text-gray-800 hover:text-blue-400"
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
  );
};

export default Header;