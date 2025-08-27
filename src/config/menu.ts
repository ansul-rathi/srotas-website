// src/config/menu.ts

import { MenuConfig } from "@components/types/menu";

export const menu: MenuConfig = {
  main: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "How it works",
      url: "/",
    },
    {
      name: "Solutions",
      url: "#",
      hasChildren: true,
      children: [
        {
          name: "InsightMatch",
          url: "/solutions/insight-match",
        },
        {
          name: "DataLink",
          url: "/solutions/data-link",
        }
      ],
    },
    {
      name: "About Us",
      url: "/",
    },

    {
      name: "Contact Us",
      url: "/",
    },
  ],
};