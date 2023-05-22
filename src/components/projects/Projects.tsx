"use client";
import { useState } from "react";
import "../presentation/presentation.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SectionComponent } from "./section/Section";
import * as Icons from "../../assets/index";

export const ProjectsComponent = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleButtonClick = () => {
    setSectionIndex((sectionIndex + 1) % 5);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 md:mt-20">
        <strong className="text-xl font-bold gradient-text">Projetos</strong>
        <h2 className="text-3xl font-bold">Meus projetos recentes</h2>
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="bg-[#2B2B32] w-full max-w-[740px] h-[280px] rounded-xl relative md:ml-12">
            <SectionComponent
              sectionIndex={sectionIndex}
              image="https://fmd-storage.s3.amazonaws.com/Loading+page.png"
              index={0}
              description="A plataforma é um espaço online para que desenvolvedores possam encontrar outros profissionais interessados em trabalhar em projetos em grupo. Com uma interface intuitiva e recursos de busca avançados, é fácil encontrar pessoas com as habilidades necessárias para fazer o seu projeto acontecer."
              link="https://github.com/insync-project"
              projectName="InSycn"
              projectTechs={[
                Icons.Nodejs,
                Icons.Typescript,
                Icons.PostegreSQL,
                Icons.Zod,
                Icons.Jest,
                Icons.TypeORM,
              ]}
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image="https://fmd-storage.s3.amazonaws.com/FindMyDuo.png"
              index={1}
              description="Inicialmente feito para mobile. O “Find my Duo” tem como propósito ajudar pessoas que têm dificuldade em achar um parceiro(a) para jogar junto! Com o “Find my Duo” será possível encontrar gamers que tenham os mesmos gostos que os seus baseado em seu perfil."
              link="https://projeto-findmyduo-six.vercel.app/"
              projectName="Find My Duo"
              projectTechs={[
                Icons.Reactjs,
                Icons.Typescript,
                Icons.PostegreSQL,
                Icons.Zod,
                Icons.TypeORM,
                Icons.Firebase,
              ]}
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image="https://fmd-storage.s3.amazonaws.com/BugerKenzie.png"
              index={2}
              description="O projeto Hamburgueria da Kenzie simula a página de pedidos de uma lanchonete, tornando possível adicionar e excluir itens no carrinho de compras, como também filtrar os itens do catálogo."
              link="https://projeto-react-js-type-script-hamburgueria-2-0.vercel.app/login"
              projectName="Burger Kenzie"
              projectTechs={[
                Icons.Reactjs,
                Icons.Typescript,
                Icons.PostegreSQL,
                Icons.TypeORM,
              ]}
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image="https://fmd-storage.s3.amazonaws.com/Netflix2.0.png"
              index={3}
              description="Projeto baseado na interface do Netflix, com sistema de pagamentos(fake) pelo stripe em conjunto com a database do Firebase."
              link="https://netflix-2-0-three.vercel.app/"
              projectName="Netflix 2.0"
              projectTechs={[
                Icons.NextJs,
                Icons.Javascript,
                Icons.Sass,
                Icons.Firebase,
                Icons.Stripe,
              ]}
            />
            <SectionComponent
              sectionIndex={sectionIndex}
              image="https://fmd-storage.s3.amazonaws.com/Kimoveis.png"
              index={4}
              description="O projeto consiste em desenvolver um serviço de back-end que gerencia uma imobiliária. O serviço será desenvolvido usando TypeORM e relacionamentos. O objetivo do serviço é gerenciar as informações da imobiliária e fornecer uma interface para que os usuários possam acessar essas informações."
              link="https://github.com/GabrielRodriguesFerreira-TI/kimoveis-api-Typeorm"
              projectName="KImoveis"
              projectTechs={[
                Icons.Nodejs,
                Icons.Typescript,
                Icons.TypeORM,
                Icons.PostegreSQL,
                Icons.Zod,
                Icons.GithubActions,
                Icons.Jest,
              ]}
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
          <span
            className={`bg-[#72757E] w-10 h-2 rounded-full transition-width duration-500 ease-in-out ${
              sectionIndex === 3 ? "bg-violet-600 w-14" : ""
            }`}
          ></span>
          <span
            className={`bg-[#72757E] w-10 h-2 mr-12 rounded-full transition-width duration-500 ease-in-out md:mr-0 ${
              sectionIndex === 4 ? "bg-violet-600 w-14" : ""
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};
