import Project, { IProject } from "@/components/project";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const PROJECTS: IProject[] = [
    {
      isFirst: true,
      name: "Shop",
      desc: "Lorem ipsum, default temporary description text.Lorem ipsum, default temporary description textLorem ipsum, default temporary description textLorem ipsum, default temporary description text",
      path: "/",
      images: [
        "/projects/shop_screen_1.png",
        "/projects/shop_screen_3.png",
        "/projects/shop_screen_2.png",
      ],
    },
    {
      isFirst: false,
      name: "ToDo",
      desc: "Lorem ipsum, default temporary description text.",
      path: "/",
      images: [
        "/projects/shop_screen_1.png",
        "/projects/shop_screen_3.png",
        "/projects/shop_screen_2.png",
      ],
    },
    {
      isFirst: false,
      name: "Other",
      desc: "Lorem ipsum, default temporary description text.",
      path: "/",
      images: [
        "/projects/shop_screen_1.png",
        "/projects/shop_screen_3.png",
        "/projects/shop_screen_2.png",
      ],
    },
  ];

  return (
    <div className="w-full h-full pl-4 flex items-center text-center text-sm font-bold sm:text-2xl gap-6 flex-col my-10">
      {PROJECTS.map((result, i) => (
        <Project
          key={"projectKey_" + i}
          name={result.name}
          desc={result.desc}
          path={result.name}
          images={result.images}
          isFirst={result.isFirst}
        ></Project>
      ))}
    </div>
  );
}
