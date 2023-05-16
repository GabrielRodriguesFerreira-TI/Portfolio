"use client";
import { useState } from "react";
import "../presentation/presentation.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InSync from "../../../public/Loading page.png";
import FindMyDuo from "../../../public/FindMyDuo.png";
import BurgerKenzie from "../../../public/BugerKenzie.png";
import { SectionComponent } from "./section/Section";

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
          <div className="bg-[#2B2B32] w-full max-w-2xl h-[280px] rounded-xl relative">
            <SectionComponent
              sectionIndex={sectionIndex}
              image={InSync}
              index={0}
              description="A plataforma é um espaço online para que desenvolvedores possam encontrar outros profissionais interessados em trabalhar em projetos em grupo. Com uma interface intuitiva e recursos de busca avançados, é fácil encontrar pessoas com as habilidades necessárias para fazer o seu projeto acontecer."
              link="https://github.com/insync-project"
              projectName="InSycn"
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image={FindMyDuo}
              index={1}
              description="Inicialmente feito para mobile. O “Find my Duo” tem como propósito ajudar pessoas que têm dificuldade em achar um parceiro(a) para jogar junto! Com o “Find my Duo” será possível encontrar gamers que tenham os mesmos gostos que os seus baseado em seu perfil."
              link="https://github.com/FindMyDuo"
              projectName="Find My Duo"
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image={BurgerKenzie}
              index={2}
              description="O projeto Hamburgueria da Kenzie simula a página de pedidos de uma lanchonete, tornando possível adicionar e excluir itens no carrinho de compras, como também filtrar os itens do catálogo."
              link="https://projeto-react-js-type-script-hamburgueria-2-0.vercel.app/login"
              projectName="Burger Kenzie"
            />
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
