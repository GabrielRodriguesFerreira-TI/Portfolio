import "../../components/presentation/presentation.css";
import ProfilePicture from "../../../public/linkedinProfilePicture.png";
import Image from "next/image";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <span>
          <strong className="text-lg font-bold gradient-text">Sobre mim</strong>
          <h2 className="text-4xl font-bold">Minha experiência pessoal</h2>
        </span>
        <p className="text-sm text-gray-400">
          Desenvolvedor Full-Stack Com experiência em HTML, CSS, JavaScript e
          TypeScript para criação de interfaces de usuário responsivas e
          atraentes, como para criação de tabelas e API Restful bem estruturadas
          e funcionais.
        </p>
        <p className="text-sm text-gray-400">
          Possuo sólido conhecimento de frameworks populares de Front-End e
          Back-End, como React, Next Js, Node Js, Express, Python, PostgreSQL,
          MongoDB e Docker, além de habilidades em desenvolvimento de softwares,
          como versionamento de código, integração contínua e testes
          automatizados. Experiência com técnicas de otimização de desempenho e
          SEO (Search Engine Optimization), uso contínuo metodologias ágeis,
          como Scrum ou Kanban. Forte habilidade de resolução de problemas e
          solução de bugs de forma eficiente e eficaz.
        </p>
      </div>
      <div className="flex h-[45%] justify-center">
        <Image
          className="rounded-full"
          src={ProfilePicture}
          alt="Profile picture"
        />
      </div>
    </>
  );
};