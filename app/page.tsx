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
    <div className="w-full h-full  flex items-center text-center text-sm font-bold xl:text-2xl flex-col">
      <div className="w-full bg-[#0f172a] text-left pt-10 px-6 xl:px-10 flex flex-col pb-20">
        <p className=" text-zinc-50 font-medium text-xl xl:text-3xl">About</p>
        <div className="flex items-start">
          <div className="border-b-2 w-14 ml-2 mt-3 shadow-md border-[#00dd82]"></div>
          <div className="flex flex-col font-normal text-light xl:text-xl w-full xl:w-2/3 text-[#cad2df] gap-4">
            <span className="indent-6">
              Welcome, My name is Łukasz and I specialize in creating websites
              as a frontend developer. I&apos;ve got 2 years of commercial
              experience as a C# developer with last few months in Java Script
              with the use of react framework, - currently I&apos;m looking
              forward to gain more experience as a frontend developer in
              creating websites.
            </span>
            <span className="indent-6">
              Learning new things is always fun for me and not a problem,
              because I believe that people constantly have the opportunity to
              develop themselves regardless of their position, they just have to
              go forward, because staying in the same place is equal to going
              backward.
            </span>
            <span className="indent-6">
              The other very important factor in work is communication with
              co-workers I think that this is crucial during project development
              and the ability to cooperate in a team leads to success.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 bg-[#1a2333] pb-8 text-left flex text-white flex-col shadow-md items-center ">
        <div className="flex w-full items-center m-auto -mt-4">
          <div className="border-b w-full border-[#00dd82] shadow-md"></div>
          <p className="text-center w-96 text-[#00dd82] font-light text-xl xl:text-2xl bg-[#0f172a] px-4 xl:px-8 rounded-md border-x-2 border-[#00dd82] z-0 shadow-md ">
            Skills
          </p>
          <div className="border-b w-full border-[#00dd82] shadow-md"></div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-2 mx-6 xl:mx-1 xl:pb-4 xl:mt-8">
          {SKILLS.map((result, i) => (
            <>
              <a
                href={result.path}
                target="_blank"
                className="xl:w-36 xl:h-36 w-14 h-14 flex flex-col shadow-md hover:shadow-xl
                font-light text-center duration-300 ease-out transition-all hover:text-[#00dd82] items-center
                 hover:bg-[#070c1d] text-lg bg-[#0f172a] rounded-md"
                key={"skillKey" + i}
              >
                <img
                  className="xl:w-20 xl:h-20 w-8 h-8 mt-3 xl:mt-5 hover:scale-105 duration-300 ease-out transition-all"
                  src={result.icon}
                  alt={result.name}
                />
                <p className="xl:block hidden p-2 text-base font-medium">
                  {result.name}
                </p>
              </a>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col xl:gap-14 pb-20 xl:mt-10 ">
        <div className="flex h-full xl:text-left text-slate-50 text-2xl flex-col mt-10 xl:px-10">
          <p className="font-medium text-xl xl:text-3xl">Projects</p>
          <div className="flex xl:justify-start justify-center xl:items-start gap-4">
            <div className="xl:border-b-2 border-b w-full xl:w-1/12 xl:ml-2 mt-3 border-[#00dd82] xl:border-[#00dd82]"></div>
          </div>
        </div>
        {PROJECTS.map((result, i) => (
          <>
            <ProjectMobile
              key={"projectKey_" + i}
              project={result}
              index={i}
              className=" block xl:hidden"
            ></ProjectMobile>
            <Project
              key={"projectKey_" + i}
              project={result}
              index={i}
              className=" hidden xl:block "
            ></Project>
          </>
        ))}
      </div>

      <div className="w-full gap-4 bg-[#1e293b] pb-10 text-left flex text-white flex-col shadow-md items-center xl:mt-10 relative">
        <div className="flex w-full items-center m-auto -mt-4">
          <div className="border-b w-full border-[#00dd82] shadow-md"></div>
          <p className="text-center text-[#00dd82] w-96 font-light text-lg xl:text-2xl whitespace-nowrap px-4 xl:px-8 bg-[#0f172a] border-x-2 border-[#00dd82] z-0 rounded-md shadow-md">
            Contact Me
          </p>
          <div className="border-b w-full border-[#00dd82] shadow-md"></div>
        </div>

        <div className="flex gap-4 mt-6 flex-col items-center text-[#babac2] ">
          <div className="flex gap-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText("884 648 893");
                toast({
                  title: "Phone number copied",
                });
              }}
              className="flex flex-col hover:shadow-xl shadow-md py-1 font-light duration-300 ease-out transition-all text-left  hover:text-[#00dd82] items-start hover:bg-[#070c1d] text-lg bg-[#0f172a] rounded-md"
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
                className=" hover:text-[#00dd82] hover:shadow-xl items-start duration-300 ease-out transition-all hover:bg-[#070c1d] text-xl bg-[#0f172a] rounded-md px-2 py-1"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C5%82ukasz-surma-71b0a7219/"
                className=" hover:text-[#00dd82] hover:shadow-xl items-start duration-300 ease-out transition-all hover:bg-[#070c1d] text-xl bg-[#0f172a] rounded-md px-2 py-1"
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
            className="flex flex-col hover:shadow-xl shadow-md py-1 font-light text-left duration-300 ease-out transition-all  hover:text-[#00dd82] items-start hover:bg-[#070c1d] text-lg bg-[#0f172a] rounded-md"
          >
            <div className="flex hover:shadow-xl items-center gap-4 px-4 text-center">
              <FontAwesomeIcon icon={faEnvelope} />

              <p>lukaszsurma73@gmail.com</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
