import Project, { IProject } from "@/components/project";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const PROJECTS: IProject[] = [
    {
      index: 0,
      name: "Shop",
      desc: "Project of a store website that has all the basic functionalities like displaying products, sorting, filtering, search, opinions, product page, adding products to the cart and ordering details. The website was created with the use of FakeStore API - so all products are pulled from the database.",
      path: "https://github.com/S-Lukasz/Shop",
      images: [
        "/projects/shop_screen_1.png",
        "/projects/shop_screen_3.png",
        "/projects/shop_screen_2.png",
      ],
    },
    {
      index: 1,
      name: "ToDo",
      desc: "Project of a todo website.",
      path: "https://github.com/S-Lukasz",
      images: [
        "/projects/shop_screen_1.png",
        "/projects/shop_screen_3.png",
        "/projects/shop_screen_2.png",
      ],
    },
    // {
    //   isFirst: false,
    //   name: "Other",
    //   desc: "Lorem ipsum, default temporary description text.",
    //   path: "https://github.com/S-Lukasz",
    //   images: [
    //     "/projects/shop_screen_1.png",
    //     "/projects/shop_screen_3.png",
    //     "/projects/shop_screen_2.png",
    //   ],
    // },
  ];

  return (
    <div className="w-full h-full px-2 flex items-center text-center text-sm font-bold sm:text-2xl gap-2 sm:gap-6 flex-col my-10">
      <div className="flex h-full text-slate-50 text-2xl text-center border-b border-zinc-600 w-2/3 sm:w-1/3 p-2">
        <p className="m-auto">Projects</p>
      </div>
      {PROJECTS.map((result, i) => (
        <Project
          key={"projectKey_" + i}
          name={result.name}
          desc={result.desc}
          path={result.path}
          images={result.images}
          index={result.index}
        ></Project>
      ))}
    </div>
  );
}
