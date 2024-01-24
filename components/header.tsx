"use client";

import Link from "next/link";
import * as React from "react";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Page {
  name: string;
  path: string;
}

const PAGES: Page[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  // {
  //   name: "Page",
  //   path: "/page",
  // },
];

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const router = useRouter();
  // const [showPanel, setShowPanel] = useState<Checked>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-slate-300 hover:text-slate-50  inline-flex h-6 px-4 py-2 
          items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
        >
          <FontAwesomeIcon className="h-5 w-5" icon={faBars} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-base text-slate-50">
          Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        {PAGES.map((result, i) => (
          <DropdownMenuItem
            className="px-2 py-1.5 text-sm font-semibold text-slate-300 hover:text-slate-50"
            key={"dropdownKey_" + i}
            onClick={() => {
              router.push(result.path);
            }}
          >
            {result.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem
          className="px-2 py-1.5 text-sm font-semibold text-slate-300 hover:text-slate-50"
          onClick={() => {
            window.open("https://github.com/S-Lukasz", "_blank");
          }}
        >
          Github
        </DropdownMenuItem>
        <DropdownMenuItem
          className="px-2 py-1.5 text-sm font-semibold text-slate-300 hover:text-slate-50"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/%C5%82ukasz-surma-71b0a7219/",
              "_blank"
            );
          }}
        >
          LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const currentPath = usePathname();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobileView(isMobileView);
    };

    setIsMobileView(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const header = useMemo(() => {
    console.log(
      "header, isMobileView: " +
        isMobileView +
        "header, window.innerWidth: " +
        window.innerWidth
    );

    if (!isMobileView) {
      return (
        <header className="sticky top-0 z-10 flex flex-col bg-zinc-950 shadow-md">
          <p className="text-center text-lg font-semibold text-white absolute w-full h-full pointer-events-none mt-3 ">
            Portfolio - Łukasz Surma
          </p>
          <div className="pl-4 ml-6 mb-1 flex items-center text-center text-sm font-bold sm:text-2xl gap-2">
            {PAGES.map((result, i) => (
              <div
                key={"pageKey_" + i}
                className="pr-4 my-2 " //border-r border-zinc-700
              >
                <Link
                  href={result.path}
                  className={
                    (result.path == currentPath
                      ? "text-white "
                      : "text-slate-300 ") +
                    " bg-zinc-950  hover:text-slate-50 inline-flex h-6 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                  }
                >
                  <p>{result.name}</p>
                </Link>
                <div
                  className={
                    result.path == currentPath
                      ? "border-b border-orange-400"
                      : ""
                  }
                />
              </div>
            ))}

            <div className="my-2 pl-4 mb-1 flex items-center gap-4 ml-auto mr-10">
              <a
                target="_blank"
                href="https://github.com/S-Lukasz"
                className="text-slate-300 hover:text-slate-50 inline-flex
            items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon className="text-xl" icon={faGithub} />
              </a>
              <div className="border-r border-zinc-600 h-6 " />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/%C5%82ukasz-surma-71b0a7219/"
                className="text-slate-300 hover:text-slate-50 inline-flex
          items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className=" border-b border-zinc-700"> </div>
        </header>
      );
    } else
      return (
        <header className="sticky top-0 z-10 flex bg-zinc-950 shadow-md py-4">
          <p className="text-center text-lg font-semibold text-white absolute w-full pointer-events-none mb-2">
            Portfolio - Łukasz Surma
          </p>
          <div className="flex items-center text-center font-bold text-sm ">
            {DropdownMenuCheckboxes()}
          </div>
          <div className="border-r border-zinc-600" />
        </header>
      );
  }, [currentPath, isMobileView]);

  return header;
}
