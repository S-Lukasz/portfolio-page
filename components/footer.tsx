export default function Footer() {
  return (
    <footer className="z-10 flex flex-col items-center justify-center border-t border-zinc-600 bg-neutral-950">
      <div className=" border-t border-zinc-600" />
      <p className="text-sm text-[#A1A1AA] p-6 text-center">
        Built by Łukasz Surma. The source code is available on{" "}
        <a
          className="text-[#A1A1AA] hover:text-white underline"
          href="https://github.com/S-Lukasz"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
