export interface IProject {
  name: string;
  desc: string;
  path: string;
  page: string;
  skills: SkillType[];
  images: string[];
}

export interface ISkill {
  type: SkillType;
  name: string;
  path: string;
  icon: string;
}

export enum SkillType {
  JavaScript,
  TypeScript,
  React,
  Next,
  Tailwind,
  Angular,
  Css,
  Api,
  CSharp,
  Git,
}

export const SKILLS: ISkill[] = [
  {
    type: SkillType.JavaScript,
    name: "JavaScript",
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/skills/js_icon.png",
  },
  {
    type: SkillType.TypeScript,
    name: "TypeScript",
    path: "https://www.typescriptlang.org/",
    icon: "/skills/ts_icon.png",
  },
  {
    type: SkillType.React,
    name: "React.js",
    path: "https://react.dev/",
    icon: "/skills/react_icon.png",
  },
  {
    type: SkillType.Next,
    name: "Next.js",
    path: "https://nextjs.org/",
    icon: "/skills/nextjs_icon.png",
  },
  {
    type: SkillType.Tailwind,
    name: "Tailwind CSS",
    path: "https://tailwindcss.com/",
    icon: "/skills/tailwindcss_icon.png",
  },
  {
    type: SkillType.Angular,
    name: "Angular",
    path: "https://angular.io/",
    icon: "/skills/angular_icon.png",
  },
  {
    type: SkillType.Css,
    name: "CSS",
    path: "https://en.wikipedia.org/wiki/CSS",
    icon: "/skills/css_icon.png",
  },
  {
    type: SkillType.Api,
    name: "REST API",
    path: "https://en.wikipedia.org/wiki/API",
    icon: "/skills/api_icon.png",
  },
  {
    type: SkillType.CSharp,
    name: "C#",
    path: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: "/skills/csharp_icon.png",
  },
  {
    type: SkillType.Git,
    name: "Git",
    path: "https://git-scm.com/",
    icon: "/skills/git_icon.png",
  },
];

export const PROJECTS: IProject[] = [
  {
    name: "Social Media",
    desc: "Dynamic web application that allows interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks.",
    path: "https://github.com/S-Lukasz/social-app",
    page: "https://social-app-ls.vercel.app/",
    skills: [
      SkillType.JavaScript,
      SkillType.Tailwind,
      SkillType.React,
      SkillType.Next,
    ],
    images: [
      "/projects/social_screen_1.png",
      "/projects/social_screen_2.png",
      "/projects/social_screen_3.png",
      "/projects/social_screen_4.png",
      "/projects/social_screen_5.png",
      "/projects/social_screen_6.png",
    ],
  },
  {
    name: "Training Tracker",
    desc: "Dynamic web application designed to manage fitness data. Built with the use of Angular framework, this website allows user to organize and track their training data. With registration and login system, users can create personalized workouts, complete with exercises that include weight selection, targeted muscle groups, and customizable sets with rep counts. The entire user experience is backed by a secure Supabase data.",
    path: "https://github.com/S-Lukasz/training-tracker",
    page: "https://training-tracker-lukaszsurma.vercel.app/",
    skills: [
      SkillType.JavaScript,
      SkillType.TypeScript,
      SkillType.Css,
      SkillType.Angular,
    ],
    images: [
      "/projects/training_scr_2.png",
      "/projects/training_scr_7.png",
      "/projects/training_scr_5.png",
      "/projects/training_scr_3.png",
      "/projects/training_scr_4.png",
      "/projects/training_scr_6.png",
      "/projects/training_scr_8.png",
      "/projects/training_scr_9.png",
      "/projects/training_scr_1.png",
    ],
  },
  {
    name: "Web Shop",
    desc: "Project of a store website that has all the basic functionalities like displaying products, sorting, filtering, search, opinions, product page, adding products to the cart and ordering details. The website was created with the use of FakeStore API - so all products are pulled from the database.",
    path: "https://github.com/S-Lukasz/Shop",
    page: "https://shop-lukaszsurma.vercel.app/",
    skills: [
      SkillType.JavaScript,
      SkillType.Tailwind,
      SkillType.React,
      SkillType.Next,
    ],
    images: [
      "/projects/shop_screen_1.png",
      "/projects/shop_screen_3.png",
      "/projects/shop_screen_2.png",
    ],
  },
  {
    name: "Kanban Board",
    desc: "Set up your kanban board and assign tedious tasks to manage your project. Website was created with the use of local storage, to save and load all user data.",
    path: "https://github.com/S-Lukasz/todo-app",
    page: "https://todo-lukaszsurma.vercel.app/",
    skills: [
      SkillType.JavaScript,
      SkillType.Tailwind,
      SkillType.React,
      SkillType.Next,
    ],
    images: [
      "/projects/todo_screen_4.png",
      "/projects/todo_screen_5.png",
      "/projects/todo_screen.png",
      "/projects/todo_screen_2.png",
      "/projects/todo_screen_3.png",
    ],
  },
];
