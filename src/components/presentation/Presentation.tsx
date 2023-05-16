import "./presentation.css";
import "../../animations/breathing.animation.css";
import Image from "next/image";
import LogoPic from "../../../public/portfolio-icon.svg";
import Linkedin from "../../../public/icons8-linkedin.svg";
import GitHub from "../../../public/icons8-github.svg";
import Instagram from "../../../public/icons8-instagram.svg";
import Descubra from "../../../public/descubra-icon.svg";

export const PresentationComponent = () => {
  return (
    <>
      <nav className="flex gap-3 md:flex-col md:gap-12 md:fixed">
        <Image
          src={LogoPic}
          alt="Picture of the site logo"
          width={40}
          height={40}
        />
        <div className="flex w-full items-center justify-between md:flex-col md:h-[84vh]">
          <div className="w-[25%] md:w-2 md:flex md:h-[35%]">
            <div className="h-1 bg-gray-400 w-full rounded md:h-[100%]" />
          </div>
          <div className="flex gap-2 md:flex-col md:gap-8">
            <a
              href="https://www.linkedin.com/in/gabriel-rodrigues-ferreira-27b21b243/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src={Linkedin}
                alt="Linkedin picture"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://github.com/GabrielRodriguesFerreira-TI"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src={GitHub} alt="Github picture" width={35} height={35} />
            </a>
            <a
              href="https://www.instagram.com/gabrielrodriguesj/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src={Instagram}
                alt="Instagram picture"
                width={35}
                height={35}
              />
            </a>
          </div>
          <div className="w-[25%] md:w-2 md:flex md:h-[35%]">
            <div className="h-1 bg-gray-400 w-full rounded md:h-[100%]" />
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-28 h-[80%] items-center justify-center md:h-[100%] md:mt-5 md:w-[100%]">
        <div className="flex flex-col gap-8 md:items-center">
          <h1 className="text-2xl text-center font-bold">
            Olá, eu me chamo <strong className="gradient-text">Gabriel</strong>
          </h1>
          <p className="text-center md:w-[50%]">
            Desenvolvedor web Full-Stack autodidata, sempre entregando os
            <strong className="gradient-text"> melhores</strong> projetos a 1
            ano.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 breathing-div">
          <span className="bg-violet-600 rounded-full p-3">Mais sobre mim</span>
          <Image
            src={Descubra}
            alt="Icone para o Mais sobre mim"
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};
