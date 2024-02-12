import { IProject, PROJECTS, SKILLS, SkillType } from "@/app/consts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo } from "react";

interface Prop {
  index: number;
  className: string;
  project: IProject;
}

export default function ProjectMobile({ className, project, index }: Prop) {
  const isFlipped = useMemo(() => index % 2 !== 0, [index]);

  const getSkill = (type: SkillType) => {
    return SKILLS.find((skill) => skill.type === type);
  };

  return (
    <div
      className={
        className +
        (index === PROJECTS.length - 1 ? " pb-6 shadow-md" : "  ") +
        " flex flex-col w-full h-full text-slate-50 relative bg-[#1a2333]  "
      }
    >
      <div
        className={
          " flex flex-col h-full text-left ml-auto mt-2 pointer-events-auto p-4"
        }
      >
        <div
          className={
            index === 0
              ? ""
              : " border-t border-[#3f4c63] w-full mt-2 mb-8 mx-auto"
          }
        />
        <p className="text-xl font-medium">{project.name}</p>
        <div className="flex w-full gap-2">
          <div className="ml-4 w-6 h-1 mt-2 border-b-2 border-[#00dd82]"></div>
          <p
            className={" pb-2 pr-2 w-full font-normal text-base text-[#cad2df]"}
          >
            {project.desc}
          </p>
        </div>
        <div className="w-full flex border-t border-[#3f4c63] gap-2 pt-2">
          <a
            target="_blank"
            href={project.page}
            className="text-[#00dd82] hover:text-white  inline-flex text-center px-4 duration-300 ease-out transition-all
            whitespace-nowrap rounded-md text-base font-medium text-shadow underline"
          >
            Page
          </a>
          <div className=" border-r border-[#3f4c63]"></div>
          <a
            target="_blank"
            href={project.path}
            className="text-[#00dd82] hover:text-white  inline-flex text-center px-4 duration-300 ease-out transition-all
            whitespace-nowrap rounded-md text-base font-medium text-shadow underline"
          >
            Code
          </a>
        </div>
      </div>

      <Carousel className="w-full  p-4 ">
        <CarouselContent className="h-full">
          {project.images.map((image, i) => (
            <CarouselItem key={"imageKey_" + i}>
              <img
                className={
                  "flex w-[40rem] m-auto pl-4 object-cover h-full rounded-md"
                }
                src={image}
                alt="projImg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-20 w-5 h-5 bg-neutral-600 hover:bg-orange-300 hover:border-neutral-800" />
        <CarouselNext className="mr-20 w-5 h-5 bg-neutral-600  hover:bg-orange-300 hover:border-neutral-800" />
      </Carousel>

      <div className={"w-full justify-center mt-4 flex gap-4"}>
        {project.skills.map((result, i) => (
          <>
            <a
              href={getSkill(result)?.path}
              target="_blank"
              className="cursor-pointer border border-[#00dd8175] hover:border-[#00dd81bd] 
                     rounded-md hover:bg-[#070c1d] text-lg bg-[#0f172a] duration-300 ease-out transition-all 
                      pointer-events-auto w-10 h-10 flex flex-col items-center justify-center"
              key={"skillKey" + i}
            >
              <img
                className="w-6 h-6 hover:scale-105 duration-300 ease-out transition-all"
                src={getSkill(result)?.icon}
                alt={"skill_" + i + "_icon"}
              />
            </a>
          </>
        ))}
      </div>
    </div>
  );
}
