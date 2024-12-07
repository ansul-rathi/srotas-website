// src/config/config.ts

import { SiteConfig } from "@components/types/menu";

export const siteConfig: SiteConfig = {
  logo: "/images/logo.svg",
  nav_button: {
    enable: true,
    label: "Sign Up",
    link: "/signup",
  },
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    docs: "#",
    discord: "#",
    sponsor: "#",
  },
};