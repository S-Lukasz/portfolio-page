"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

interface Page {
  name: string;
  path: string;
}

export default function Header() {
  const PAGES: Page[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Page",
      path: "/page",
    },
  ];

  const currentPath = usePathname();

  return (
    <header className="sticky top-0 z-10 flex flex-col bg-zinc-950 shadow-md pt-4">
      <p className="text-center text-lg font-semibold text-white absolute w-full pt-2 pointer-events-none">
        Portfolio - Łukasz Surma
      </p>
      <div className="pl-4 mb-2 flex items-center text-center text-sm font-bold sm:text-2xl gap-4">
        {PAGES.map((result, i) => (
          <div
            key={"pageKey_" + i}
            className="pr-4 my-2 border-r border-zinc-700"
          >
            <Link
              href={result.path}
              className="bg-zinc-950 text-slate-200 hover:text-slate-50 hover:bg-zinc-900 inline-flex h-6 px-4 py-2 
              items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <p>{result.name}</p>
            </Link>
            <div
              className={
                result.path == currentPath ? "border-b border-orange-400" : ""
              }
            />
          </div>
        ))}
      </div>

      <div className=" border-b border-zinc-700"> </div>
    </header>
  );
}
