// src/types/menu.ts
export interface MenuItem {
    name: string;
    url: string;
    hasChildren?: boolean;
    children?: MenuItem[];
  }
  
  export interface MenuConfig {
    main: MenuItem[];
  }
  
  export interface SiteConfig {
    logo: string;
    nav_button: {
      enable: boolean;
      label: string;
      link: string;
    };
    nav_login_button: {
      enable: boolean;
      label: string;
      link: string;
    };
    links: {
      github: string;
      twitter: string;
      docs: string;
      discord: string;
      sponsor: string;
    },
  }