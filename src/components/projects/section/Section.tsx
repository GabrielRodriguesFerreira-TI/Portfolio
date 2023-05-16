"use client";
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
}: iSectionOptions) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsPhotoOpen(!isPhotoOpen);
  };

  const handleCloseClick = () => {
    setIsPhotoOpen(false);
  };

  return (
    <>
      <section
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          sectionIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {isPhotoOpen ? (
          <div
            className="absolute inset-0 flex items-center"
            onClick={handleCloseClick}
            style={{ zIndex: 1 }}
          >
            <Image src={image} alt="InSync project picture" />
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
          </>
        )}
      </section>
    </>
  );
};
