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
          " drop-shadow-clipped absolute h-full w-20 bg-[#1e293b] z-10 pointer-events-none "
        }
      />
      <div
        className={
          (isFlipped ? " justify-end " : " justify-start") +
          " h-full  flex relative overflow-hidden"
        }
      >
        <Carousel className="w-2/3 shadow-lg bg-[#1e293b] my-2">
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
              " z-20 bg-[#1e293b] hover:bg-[#00dd82] hover:border-[#434e61] duration-300 ease-out transition-all"
            }
          />
          <CarouselNext
            className={
              (isFlipped ? "mr-[72px] " : " mr-24 ") +
              " z-20 bg-[#1e293b] hover:bg-[#00dd82] hover:border-[#434e61] duration-300 ease-out transition-all"
            }
          />
        </Carousel>
        <div
          className={cn(
            isFlipped && "-scale-100",
            "drop-shadow-clipped flex absolute w-full h-full pointer-events-none"
          )}
        >
          <div className="clipped-component bg-[#1e293b] w-full h-full flex absolute">
            <div
              className={
                (isFlipped ? " -scale-100 p-8 w-2/3 " : " w-1/3 ") +
                " flex flex-col h-full text-left ml-auto mt-10 pointer-events-auto"
              }
            >
              <div
                className={index === 0 ? "" : "  w-full mt-2 mb-8 mx-auto"}
              />
              <p className="text-2xl font-medium">{project.name}</p>
              <div className="flex w-full ">
                <div className="ml-4 w-10 h-1 mt-2 border-b-2 border-[#00dd82]"></div>
                <p
                  className={
                    (isFlipped ? " w-1/2 " : " w-3/4 ") +
                    " pb-2 font-normal indent-6 text-[#cad2df] text-lg"
                  }
                >
                  {project.desc}
                </p>
              </div>
              <div className="w-1/3 flex border-t-2 border-[#3f4c63] gap-2 py-2">
                <a
                  target="_blank"
                  href={project.page}
                  className="text-[#00dd82] hover:text-white inline-flex text-center px-4 duration-300 ease-out transition-all
                  whitespace-nowrap rounded-md text-base font-medium text-shadow"
                >
                  Page
                </a>
                <div className=" border-r-2 border-[#3f4c63]"></div>
                <a
                  target="_blank"
                  href={project.path}
                  className="text-[#00dd82] hover:text-white  inline-flex text-center px-4 duration-300 ease-out transition-all
                whitespace-nowrap rounded-md text-base font-medium text-shadow
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
