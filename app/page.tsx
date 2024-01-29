"use client";

import Project from "@/components/project";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "@/components/ui/use-toast";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectMobile from "@/components/project-mobile";
import { PROJECTS, SKILLS } from "./consts";

export default function Home() {
  return (
    <div className="w-full h-full  flex items-center text-center text-sm font-bold sm:text-2xl flex-col">
      <div className="w-full bg-[#363636] text-left pt-10 px-10 flex  flex-col pb-20">
        <p className=" text-zinc-50 font-medium text-xl sm:text-3xl">About</p>
        <div className="flex items-start">
          <div className="border-b-2 w-14 ml-2 mt-3 shadow-md border-orange-400"></div>
          <div className="flex flex-col font-normal text-base sm:text-xl w-3/4 sm:w-2/3 text-zinc-300 gap-4">
            <span className="indent-6">
              Welcome, My name is Łukasz and I&apos;m specializing in creating
              websites as a frontend developer. I&apos;ve got 2 years of
              commercial experience as a GUI game developer in C# language, -
              currently creating games is my side hobby and I&apos;m looking
              forward to gaining experience in creating websites alongside
              specialist.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 bg-neutral-800 pb-8 text-left flex text-white flex-col shadow-md items-center ">
        <div className="flex w-full items-center m-auto -mt-4">
          <div className="border-b-2 w-full border-orange-300 shadow-md"></div>
          <p className="text-center w-96 font-medium text-xl sm:text-2xl bg-[#363636] px-4 sm:px-8 rounded-md border-x-2 border-orange-300 z-0 shadow-md ">
            Skills
          </p>
          <div className="border-b-2 w-full border-orange-300 shadow-md"></div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-2 sm:pb-4 sm:mt-8">
          {SKILLS.map((result, i) => (
            <>
              <a
                href={result.path}
                target="_blank"
                className="sm:w-36 sm:h-36 w-14 h-14 flex flex-col shadow-md font-light text-center duration-300 ease-out transition-all  hover:text-orange-400 items-center hover:bg-[#4d4b4b] text-lg bg-[#363636] rounded-md"
                key={"skillKey" + i}
              >
                <img
                  className="sm:w-20 sm:h-20 w-8 h-8 mt-3 sm:mt-4 "
                  src={result.icon}
                  alt={result.name}
                />
                <p className="sm:block hidden p-2 text-base font-medium">
                  {result.name}
                </p>
              </a>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:gap-14 pb-20 sm:mt-10 bg-[#383838]">
        <div className="flex h-full sm:text-left text-slate-50 text-2xl flex-col mt-10 sm:px-10">
          <p className="font-medium text-xl sm:text-3xl">Projects</p>
          <div className="flex sm:justify-start justify-center sm:items-start gap-4">
            <div className="sm:border-b-2 border-b w-full sm:w-1/12 sm:ml-2 mt-3 border-orange-300 sm:border-orange-400"></div>
          </div>
        </div>
        {PROJECTS.map((result, i) => (
          <>
            <ProjectMobile
              key={"projectKey_" + i}
              project={result}
              index={i}
              className=" block sm:hidden "
            ></ProjectMobile>
            <Project
              key={"projectKey_" + i}
              project={result}
              index={i}
              className=" hidden sm:block "
            ></Project>
          </>
        ))}
      </div>

      <div className="w-full gap-4 bg-neutral-800 pb-10 text-left flex text-white flex-col shadow-md items-center sm:mt-10 relative">
        <div className="flex w-full items-center m-auto -mt-4">
          <div className="border-b-2 w-full border-orange-300 shadow-md"></div>
          <p className="text-center w-96 font-medium text-lg sm:text-2xl whitespace-nowrap px-4 sm:px-8 bg-[#363636] border-x-2 border-orange-300 z-0 rounded-md shadow-md">
            Contact Me
          </p>
          <div className="border-b-2 w-full border-orange-300 shadow-md"></div>
        </div>

        <div className="flex gap-4 mt-8 flex-col items-center text-[#babac2] ">
          <div className="flex gap-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText("884 648 893");
                toast({
                  title: "Phone number copied",
                });
              }}
              className="flex flex-col shadow-md py-1 font-light duration-300 ease-out transition-all text-left hover:text-orange-400 items-start hover:bg-[#292929] text-lg bg-[#363636] rounded-md"
            >
              <div className="flex items-center gap-4 px-4 text-center">
                <FontAwesomeIcon icon={faPhone} />

                <p>884 648 893</p>
              </div>
            </button>
            <div className="flex items-center gap-4 ">
              <a
                target="_blank"
                href="https://github.com/S-Lukasz"
                className="hover:text-orange-400 items-start duration-300 ease-out transition-all hover:bg-[#292929] text-xl bg-[#363636] rounded-md px-2 py-1"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C5%82ukasz-surma-71b0a7219/"
                className="hover:text-orange-400 items-start duration-300 ease-out transition-all hover:bg-[#292929] text-xl bg-[#363636] rounded-md px-2 py-1"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText("lukaszsurma73@gmail.com");
              toast({
                title: "E-mail copied",
              });
            }}
            className="flex flex-col shadow-md py-1 font-light text-left duration-300 ease-out transition-all hover:text-orange-400 items-start hover:bg-[#292929] text-lg bg-[#363636] rounded-md"
          >
            <div className="flex items-center gap-4 px-4 text-center">
              <FontAwesomeIcon icon={faEnvelope} />

              <p>lukaszsurma73@gmail.com</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
