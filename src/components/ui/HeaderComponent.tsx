import React, { useContext, useMemo } from "react";
import { Button } from "./button";
const navs = ["Home", "Projects", "Skills"] as const;

export default function HeaderComponent() {
  return (
    <header className="w-full max-w-fit px-8 sticky top-6 rounded-2xl h-8 bg-[#007acc] lg:top-6">
      <nav className=" w-full  h-full flex justify-center items-center">
        <ul className="flex justify-center w-full gap-8">
          {navs.map((navs, index) => (
            <Button
              key={index}
              className="text-xs cursor-default font-ArchivoBlack bg-transparent text-white p-2 rounded-md transition-all duration-300 hover:bg-[#0d70bb] active:text-[#b4c9ec]"
              onClick={() =>
                document
                  .getElementById(navs)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {navs}
            </Button>
          ))}
        </ul>
      </nav>
    </header>
  );
}
