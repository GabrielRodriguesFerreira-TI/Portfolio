"use client";
import { useState } from "react";
import "../presentation/presentation.css";

export const ProjectsComponent = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleButtonClick = () => {
    setSectionIndex((sectionIndex + 1) % 3);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <strong className="text-xl font-bold gradient-text">Projetos</strong>
        <h2 className="text-3xl font-bold">Meus projetos recentes</h2>
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="bg-[#2B2B32] w-full max-w-2xl h-[230px] rounded-xl relative">
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              projeto 1
            </section>
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              projeto 2
            </section>
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              projeto 3
            </section>
          </div>
          <button
            className="bg-violet-600 w-10 h-10 rounded-full"
            onClick={handleButtonClick}
          >
            f
          </button>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <span
            className={`bg-[#72757E] w-10 h-2 rounded-full transition-width duration-500 ease-in-out ${
              sectionIndex === 0 ? "bg-violet-600 w-14" : ""
            }`}
          ></span>
          <span
            className={`bg-[#72757E] w-10 h-2 rounded-full transition-width duration-500 ease-in-out ${
              sectionIndex === 1 ? "bg-violet-600 w-14" : ""
            }`}
          ></span>
          <span
            className={`bg-[#72757E] w-10 h-2 rounded-full transition-width duration-500 ease-in-out ${
              sectionIndex === 2 ? "bg-violet-600 w-14" : ""
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};
