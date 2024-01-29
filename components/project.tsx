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
import { IProject } from "@/app/consts";

interface Prop {
  index: number;
  className: string;
  project: IProject;
}

export default function Project({ project, className, index }: Prop) {
  const isFlipped = useMemo(() => index % 2 !== 0, [index]);

  return (
    <div
      className={
        className + " flex flex-col w-full h-full text-slate-50 relative"
      }
    >
      <div
        className={
          (isFlipped ? "  right-0 " : " ") +
          " drop-shadow-clipped absolute h-full w-20 bg-neutral-800 z-10 pointer-events-none "
        }
      />
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
                  className={
                    (isFlipped ? "" : "ml-24 ") +
                    "flex object-cover w-full h-full "
                  }
                  src={image}
                  alt="projImg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={
              (isFlipped ? "ml-24 " : " ml-[72px] ") +
              " z-20 bg-neutral-800 hover:bg-orange-400 hover:border-neutral-800 duration-300 ease-out transition-all"
            }
          />
          <CarouselNext
            className={
              (isFlipped ? "mr-[72px] " : " mr-24 ") +
              " z-20 bg-neutral-800 hover:bg-orange-400 hover:border-neutral-800 duration-300 ease-out transition-all"
            }
          />
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
              <div className="flex w-full ">
                <div className="ml-4 w-10 h-1 mt-2 border-b-2 border-orange-400"></div>
                <p
                  className={
                    (isFlipped ? " w-1/2 " : " w-3/4 ") +
                    " pb-2 font-normal indent-6 text-[#A1A1AA] text-lg"
                  }
                >
                  {project.desc}
                </p>
              </div>
              <div className="w-1/3 flex border-t border-zinc-600 gap-2 py-2">
                <a
                  target="_blank"
                  href={project.page}
                  className="text-slate-200 hover:text-orange-400 inline-flex text-center px-4 duration-300 ease-out transition-all
                  whitespace-nowrap rounded-md text-base font-medium"
                >
                  Page
                </a>
                <div className=" border-r border-zinc-600"></div>
                <a
                  target="_blank"
                  href={project.path}
                  className="text-slate-200 hover:text-orange-400 inline-flex text-center px-4 duration-300 ease-out transition-all
                whitespace-nowrap rounded-md text-base font-medium
                "
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
