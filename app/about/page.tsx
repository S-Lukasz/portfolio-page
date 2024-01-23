import Project, { IProject } from "@/components/project";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-slate-50 w-full sm:w-1/3 h-full pl-4 flex items-center text-center m-auto font-bold sm:text-2xl gap-8 flex-col mt-4 p-4 sm:p-2">
      <div className="w-full flex flex-col ">
        <p className="text-left font-semibold text-2xl w-full">Welcome</p>
        <div className="border-b border-zinc-600 h-2 w-full mb-4" />
        <p className="text-left  text-xl font-normal text-[#A1A1AA] border border-zinc-600 rounded-md p-4">
          My name is Łukasz and I&apos;m specializing in creating websites as a
          frontend developer. <br />
          <br />
          I&apos;ve got 2 years of commercial experience as an UI/UX game
          developer in C# language - currently creating games is my side hobby.
        </p>
      </div>

      {/* <div className="border-b border-zinc-600 h-2 w-full" /> */}

      <div className="w-full flex flex-col ">
        <p className="text-left font-semibold text-2xl w-full">Skills</p>
        <div className="border-b border-zinc-600 h-2 w-full mb-4" />
        <div className="text-left text-xl font-normal text-[#A1A1AA] border border-zinc-600 rounded-md p-4">
          <ul className="ml-6 list-disc">
            <li> JavaScript</li>
            <li> TypeScript</li>
            <li> React.js</li>
            <li> Tailwind CSS</li>
            <li> REST API</li>
            <li> Git</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col ">
        <p className="text-left font-semibold text-2xl w-full">Contact</p>
        <div className="border-b border-zinc-600 h-2 w-full mb-4" />
        <div className="text-left text-xl font-normal text-[#A1A1AA] border border-zinc-600 rounded-md p-4">
          <ul className="ml-6 list-disc">
            <li> Phone: 884 648 893</li>
            <li> E-mail: lukaszsurma73@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
