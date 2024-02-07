export interface IProject {
  name: string;
  desc: string;
  path: string;
  page: string;
  images: string[];
}

export interface ISkill {
  name: string;
  path: string;
  icon: string;
}

export const SKILLS: ISkill[] = [
  {
    name: "JavaScript",
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/skills/js_icon.png",
  },
  {
    name: "TypeScript",
    path: "https://www.typescriptlang.org/",
    icon: "/skills/ts_icon.png",
  },
  {
    name: "React.js",
    path: "https://react.dev/",
    icon: "/skills/react_icon.png",
  },
  {
    name: "Tailwind CSS",
    path: "https://tailwindcss.com/",
    icon: "/skills/tailwindcss_icon.png",
  },
  {
    name: "Next.js",
    path: "https://nextjs.org/",
    icon: "/skills/nextjs_icon.png",
  },
  {
    name: "REST API",
    path: "https://en.wikipedia.org/wiki/API",
    icon: "/skills/api_icon.png",
  },
  {
    name: "C#",
    path: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: "/skills/csharp_icon.png",
  },
  {
    name: "Git",
    path: "https://git-scm.com/",
    icon: "/skills/git_icon.png",
  },
];
export const PROJECTS: IProject[] = [
  {
    name: "Board",
    desc: "Set up your kanban board and assign tedious tasks to manage your project. Website was created with the use of local storage, to save and load all user data.",
    path: "https://github.com/S-Lukasz/todo-app",
    page: "https://todo-lukaszsurma.vercel.app/",
    images: [
      "/projects/todo_screen_4.png",
      "/projects/todo_screen_5.png",
      "/projects/todo_screen.png",
      "/projects/todo_screen_2.png",
      "/projects/todo_screen_3.png",
    ],
  },
  {
    name: "Shop",
    desc: "Project of a store website that has all the basic functionalities like displaying products, sorting, filtering, search, opinions, product page, adding products to the cart and ordering details. The website was created with the use of FakeStore API - so all products are pulled from the database.",
    path: "https://github.com/S-Lukasz/Shop",
    page: "https://shop-lukaszsurma.vercel.app/",
    images: [
      "/projects/shop_screen_1.png",
      "/projects/shop_screen_3.png",
      "/projects/shop_screen_2.png",
    ],
  },
];
