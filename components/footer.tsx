export default function Footer() {
  return (
    <footer className="z-10 flex h-24 flex-col items-center justify-center bg-zinc-950">
      <div className=" border-t border-zinc-700" />
      <p className="text-sm text-[#A1A1AA]">
        Built by Łukasz Surma. The source code is available on{" "}
        <a
          className="text-[#A1A1AA] hover:text-white underline"
          href="https://github.com/S-Lukasz"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
