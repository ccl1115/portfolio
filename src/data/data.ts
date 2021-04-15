export default interface Data {
  header: {
    title: string;
    subtitle: string;
    links: Array<{
      text: string;
      link: string;
    }>;
  };
  banner: {
    description: string;
    portraits: Array<{
      text: string;
      url: string;
    }>;
    more: string;
    menu: {
      projects: string,
      languages: string,
      tools: string,
      platforms: string,
    }
  };
  // intro: {
  //   basic: [title: string, value: string];
  //   bio: string;
  //   luaguages: { title: string; list: [string] };
  //   platforms: { title: string; list: [string] };
  //   projects: { title: string; list: [string] };
  //   tools: { title: string; list: [string] };
  //   personal: { title: string; list: [string] };
  //   education: { title: string; list: [string] };
  // };
}

export const zhCH: Data = {
  header: {
    title: "禹璐的简历",
    subtitle: "职业/技能/工作经历",
    links: [
      { text: "BLOG", link: "https://blog.bbsimonyu.com" },
      { text: "@GITHUB", link: "https://github.com/ccl1115" },
      {
        text: "@STACKOVERFLOW",
        link: " https://stackoverflow.com/users/824348/bbsimon ",
      },
    ],
  },
  banner: {
    description: "擅长编程",
    more: "了解更多",
    portraits: [
      {
        text: "极客思维",
        url: "./assets/portrait.png",
      },
      {
        text: "专长Android",
        url: "./assets/portrait-android.jpeg",
      },
      {
        text: "熟悉前端技术栈",
        url: "./assets/portrait-fe.jpeg",
      },
      {
        text: "造轮子",
        url: "./assets/portrait-wheel.png",
      },
    ],
    menu: {
      languages: "语言",
      projects: "项目",
      tools: "工具",
      platforms: "平台"
    }
  },
};
