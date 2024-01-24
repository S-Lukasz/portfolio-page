/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export interface IProject {
  index: number;
  name: string;
  desc: string;
  path: string;
  images: string[];
}

export default function Project({ name, desc, path, images, index }: IProject) {
  return (
    <div className="flex flex-col w-full sm:p-1 p-4 sm:w-2/5 rounded-md text-slate-50 ">
      <div className="flex flex-col text-left">
        <div
          className={
            index === 0
              ? ""
              : " border-t border-zinc-600 w-full mt-2 mb-8 mx-auto"
          }
        />
        <p className="text-xl">{name}</p>
        <p className="pb-2 font-normal  text-[#A1A1AA] text-lg">{desc}</p>
        <div className="w-2/3 sm:w-1/3 flex border-b border-zinc-600 gap-2 py-2">
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
            href={path}
            className="text-slate-200 hover:text-orange-400 inline-flex text-center px-4
              whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Code
          </a>
        </div>
        <div className="mt-4 w-full h-full border rounded-md border-zinc-600 bg-zinc-950">
          <Carousel className="w-full-full">
            <CarouselContent className="h-full">
              {images.map((image, i) => (
                <CarouselItem key={"projectKey_" + i}>
                  <img
                    className="flex object-cover w-full h-full rounded-md"
                    src={image}
                    alt="projImg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-zinc-950 hover:bg-zinc-800" />
            <CarouselNext className="hidden sm:flex bg-zinc-950 hover:bg-zinc-800" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
