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
      name: "Solutions/Products",
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
      name: "Blog",
      url: "/",
    },

    {
      name: "About Us",
      url: "/",
    },
  ],
};