"use client";
import "./section.css";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import { iSectionOptions } from "@/interfaces/projects/projects.types";

export const SectionComponent = ({
  image,
  index,
  projectName,
  description,
  link,
  sectionIndex,
  projectTechs,
}: iSectionOptions) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsPhotoOpen(!isPhotoOpen);
  };

  const handleCloseClick = () => {
    setIsPhotoOpen(false);
  };

  const extractIconName = (src: string) => {
    const parts = src.split("/");
    let filename = parts[parts.length - 1];
    filename = filename.replace(".svg", "");
    filename = filename.replace(/\.[^.]*$/, "");
    return filename;
  };

  return (
    <>
      <section
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out md:flex md:justify-around md:flex-col ${
          sectionIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {isPhotoOpen ? (
          <div
            className="absolute inset-0 flex items-center"
            onClick={handleCloseClick}
            style={{ zIndex: 1 }}
          >
            <Image src={image} alt="Project image" width={1000} height={800} />
          </div>
        ) : (
          <>
            <header className="flex flex-row p-4 justify-between items-center">
              <h2 className="font-bold text-xl gradient-text">{projectName}</h2>
              <div
                className="md:hidden"
                onClick={handlePhotoClick}
                style={{ zIndex: 1 }}
              >
                <ImageIcon className="cursor-pointer" />
              </div>
              <div className="absolute top-[-140px] left-56 h-[200px] w-72 justify-center rounded-md overflow-hidden hidden md:mb-28 md:block">
                <Image
                  src={image}
                  alt="Project image"
                  className="object-cover object-top w-full h-full"
                  width={1000}
                  height={900}
                />
              </div>
              <a
                href={`${link}`}
                target="_blank"
                className="cursor-pointer text-sm text-gray-400"
                style={{ zIndex: 1 }}
              >
                Link do projeto
              </a>
            </header>
            <ul className="p-2 text-start">
              <li>
                <p>{description}</p>
              </li>
            </ul>
            <div
              className="flex-row justify-around hidden md:flex"
              style={{ zIndex: 1 }}
            >
              {projectTechs.map((element, index) => {
                const iconName = extractIconName(element.src);
                return (
                  <div
                    className="relative inline-block tooltip"
                    key={index}
                    title={iconName}
                  >
                    <Image
                      src={element}
                      alt=""
                      width={40}
                      height={40}
                      className="filter grayscale transition duration-300 ease-in-out transform hover:scale-105 hover:filter-none cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
};
