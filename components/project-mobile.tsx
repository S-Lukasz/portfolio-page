/* eslint-disable @next/next/no-img-element */

import { IProject } from "@/app/consts";
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

  return (
    <div
      className={
        className +
        " flex flex-col w-full h-full text-slate-50 relative bg-neutral-800"
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
              : " border-t border-zinc-600 w-full mt-2 mb-8 mx-auto"
          }
        />
        <p className="text-2xl font-medium">{project.name}</p>
        <div className="flex w-full gap-2">
          <div className="ml-4 w-12 h-1 mt-2 border-b-2 border-orange-400"></div>
          <p className={" pb-2 pr-2 w-4/5 font-normal  text-[#A1A1AA] text-lg"}>
            {project.desc}
          </p>
        </div>
        <div className="w-full flex border-t border-zinc-600 gap-2 pt-2">
          <a
            target="_blank"
            href={project.page}
            className="text-slate-200 hover:text-orange-400 inline-flex text-center px-4 duration-300 ease-out
                  whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Page
          </a>
          <div className=" border-r border-zinc-600"></div>
          <a
            target="_blank"
            href={project.path}
            className="text-slate-200 hover:text-orange-400 inline-flex text-center px-4
                  whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Code
          </a>
        </div>
      </div>

      <Carousel className="w-full shadow-lg bg-neutral-800 p-4">
        <CarouselContent className="h-full">
          {project.images.map((image, i) => (
            <CarouselItem key={"imageKey_" + i}>
              <img
                className={"flex w-96 object-cover h-full rounded-md"}
                src={image}
                alt="projImg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-20 w-5 h-5 bg-neutral-600 hover:bg-orange-300 hover:border-neutral-800" />
        <CarouselNext className="mr-20 w-5 h-5 bg-neutral-600  hover:bg-orange-300 hover:border-neutral-800" />
      </Carousel>
    </div>
  );
}
