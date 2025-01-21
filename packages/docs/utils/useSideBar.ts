import type { DefaultTheme } from "vitepress";

export const useSideBar = () => {
  const sideBar: DefaultTheme.Sidebar = {
    "/guide/": [
      {
        text: "基础",
        items: [
          { text: "设计", link: "/guide/design" },
          { text: "安装", link: "/guide/install" },
        ],
      },
    ],
    "/components/": [
      {
        text: "组件总览",
        items: [
          {text:"组件总览", link:"/components/overview"}
        ]
      },
      {
        text: "基础组件",
        items: [
          { text: "按钮", link: "/components/button" },
          { text: "图标", link: "/components/icon" },
        ],
      },
    ],
  };

  return sideBar;
};
