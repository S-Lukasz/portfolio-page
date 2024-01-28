/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export interface IProject {
  name: string;
  desc: string;
  path: string;
  images: string[];
}

interface Prop {
  index: number;
  project: IProject;
}

export default function Project({ project, index }: Prop) {
  const isFlipped = useMemo(() => index % 2 !== 0, [index]);

  return (
    <div className="flex flex-col w-full h-full text-slate-50">
      <div
        className={
          (isFlipped ? " justify-end " : " justify-start") +
          " h-full  flex relative overflow-hidden"
        }
      >
        <Carousel className="w-2/3 shadow-lg bg-neutral-800 my-2">
          <CarouselContent className="h-full">
            {project.images.map((image, i) => (
              <CarouselItem key={"imageKey_" + i}>
                <img
                  className="flex object-cover w-full h-full "
                  src={image}
                  alt="projImg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20 bg-neutral-800 ml-20 hover:bg-orange-300 hover:border-neutral-800" />
          <CarouselNext className="z-20 bg-neutral-800 mr-20 hover:bg-orange-300 hover:border-neutral-800" />
        </Carousel>
        <div
          className={cn(
            isFlipped && "-scale-100",
            "drop-shadow-clipped flex absolute w-full h-full pointer-events-none"
          )}
        >
          <div className="clipped-component bg-neutral-800 w-full h-full flex absolute">
            <div
              className={
                (isFlipped ? " -scale-100 p-8 w-2/3 " : " w-1/3 ") +
                " flex flex-col h-full text-left ml-auto mt-10 pointer-events-auto"
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
                <p
                  className={
                    (isFlipped ? " w-1/2 " : " w-3/4 ") +
                    " pb-2 font-normal  text-[#A1A1AA] text-lg"
                  }
                >
                  {project.desc}
                </p>
              </div>
              <div className="w-1/3 flex border-t border-zinc-600 gap-2 py-2">
                <a
                  target="_blank"
                  href="https://shop-lukaszsurma.vercel.app/"
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
          </div>
        </div>
      </div>
    </div>
  );
}
