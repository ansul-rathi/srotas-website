// src/config/config.ts

import { SiteConfig } from "@components/types/menu";

export const siteConfig: SiteConfig = {
  logo: "/logo.svg",
  nav_button: {
    enable: true,
    label: "Sign Up",
    link: "/signup",
  }, 
  nav_login_button: {
    enable: true,
    label: "Log in",
    link: "/login",
  },
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    docs: "#",
    discord: "#",
    sponsor: "#",
  },
};