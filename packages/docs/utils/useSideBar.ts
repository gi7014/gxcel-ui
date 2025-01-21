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
        collapsed: false
      },
    ],
    "/components/": [
      {
        text: "组件总览",
        items: [
          {text:"Overview 组件总览", link:"/components/overview"}
        ],
        collapsed: false
      },
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "/components/button" },
          { text: "Icon 图标", link: "/components/icon" },
        ],
        collapsed: false
      },
    ],
  };

  return sideBar;
};
