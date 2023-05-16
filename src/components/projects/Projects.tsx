"use client";
import { useState } from "react";
import "../presentation/presentation.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImageIcon from "@mui/icons-material/Image";
import InSync from "../../../public/Loading page.png";
import FindMyDuo from "../../../public/FindMyDuo.png";
import BurgerKenzie from "../../../public/BugerKenzie.png";
import Image from "next/image";

export const ProjectsComponent = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsPhotoOpen(!isPhotoOpen);
  };

  const handleCloseClick = () => {
    setIsPhotoOpen(false);
  };

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
          <div className="bg-[#2B2B32] w-full max-w-2xl h-[280px] rounded-xl relative">
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              {isPhotoOpen ? (
                <div
                  className="absolute inset-0 flex items-center"
                  onClick={handleCloseClick}
                  style={{ zIndex: 1 }}
                >
                  <Image src={InSync} alt="InSync project picture" />
                </div>
              ) : (
                <>
                  <header className="flex flex-row p-4 justify-between items-center">
                    <h2 className="font-bold text-xl gradient-text">InSync</h2>
                    <div
                      className="md:hidden"
                      onClick={handlePhotoClick}
                      style={{ zIndex: 1 }}
                    >
                      <ImageIcon className="cursor-pointer" />
                    </div>
                    <a
                      href="https://github.com/insync-project"
                      target="_blank"
                      className="cursor-pointer text-sm text-gray-400"
                      style={{ zIndex: 1 }}
                    >
                      Link do projeto
                    </a>
                  </header>
                  <ul className="p-2 text-start">
                    <li>
                      <p>
                        A plataforma é um espaço online para que desenvolvedores
                        possam encontrar outros profissionais interessados em
                        trabalhar em projetos em grupo. Com uma interface
                        intuitiva e recursos de busca avançados, é fácil
                        encontrar pessoas com as habilidades necessárias para
                        fazer o seu projeto acontecer.
                      </p>
                    </li>
                  </ul>
                </>
              )}
            </section>
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              {isPhotoOpen ? (
                <div
                  className="absolute inset-0 flex items-center"
                  onClick={handleCloseClick}
                  style={{ zIndex: 1 }}
                >
                  <Image src={FindMyDuo} alt="FindMyDuo project picture" />
                </div>
              ) : (
                <>
                  <header className="flex flex-row p-4 justify-between items-center">
                    <h2 className="font-bold text-xl gradient-text">
                      Find My Duo
                    </h2>
                    <div
                      className="md:hidden"
                      onClick={handlePhotoClick}
                      style={{ zIndex: 1 }}
                    >
                      <ImageIcon className="cursor-pointer" />
                    </div>
                    <a
                      href="https://github.com/FindMyDuo"
                      target="_blank"
                      className="cursor-pointer text-sm text-gray-400"
                      style={{ zIndex: 1 }}
                    >
                      Link do projeto
                    </a>
                  </header>
                  <ul className="p-2 text-start">
                    <li>
                      <p>
                        Inicialmente feito para mobile. O “Find my Duo” tem como
                        propósito ajudar pessoas que têm dificuldade em achar um
                        parceiro(a) para jogar junto! Com o “Find my Duo” será
                        possível encontrar gamers que tenham os mesmos gostos
                        que os seus baseado em seu perfil .
                      </p>
                    </li>
                  </ul>
                </>
              )}
            </section>
            <section
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                sectionIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              {isPhotoOpen ? (
                <div
                  className="absolute inset-0 flex items-center"
                  onClick={handleCloseClick}
                  style={{ zIndex: 1 }}
                >
                  <Image src={BurgerKenzie} alt="FindMyDuo project picture" />
                </div>
              ) : (
                <>
                  <header className="flex flex-row p-4 justify-between items-center">
                    <h2 className="font-bold text-xl gradient-text">
                      Burger Kenzie
                    </h2>
                    <div
                      className="md:hidden"
                      onClick={handlePhotoClick}
                      style={{ zIndex: 1 }}
                    >
                      <ImageIcon className="cursor-pointer" />
                    </div>
                    <a
                      href="https://projeto-react-js-type-script-hamburgueria-2-0.vercel.app/register"
                      target="_blank"
                      className="cursor-pointer text-sm text-gray-400"
                      style={{ zIndex: 1 }}
                    >
                      Link do projeto
                    </a>
                  </header>
                  <ul className="p-2 text-start">
                    <li>
                      <p>
                        O projeto Hamburgueria da Kenzie simula a página de
                        pedidos de uma lanchonete, tornando possível adicionar e
                        excluir itens no carrinho de compras, como também
                        filtrar os itens do catálogo.
                      </p>
                    </li>
                  </ul>
                </>
              )}
            </section>
          </div>
          <button
            className="bg-violet-600 w-10 h-10 rounded-full flex justify-center items-center"
            onClick={handleButtonClick}
          >
            <ChevronRightIcon fontSize="medium" />
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
