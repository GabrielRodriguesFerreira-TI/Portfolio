import "../../components/presentation/presentation.scss";
import Image from "next/image";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:w-[50%] md:mb-28 md:mt-12">
        <span>
          <strong className="text-lg font-bold gradient-text">Sobre mim</strong>
          <h2 className="text-4xl font-bold">Minha experiência pessoal</h2>
        </span>
        <p className="text-sm text-gray-400 md:text-base">
          Desenvolvedor Full-Stack Com experiência em HTML, CSS, JavaScript e
          TypeScript para criação de interfaces de usuário responsivas e
          atraentes, como para criação de tabelas e API Restful bem estruturadas
          e funcionais.
        </p>
        <p className="text-sm text-gray-400 md:text-base">
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
      <div className="h-[300px] w-72 justify-center rounded-full overflow-hidden md:mb-28 md:mt-12">
        <Image
          src="https://fmd-storage.s3.amazonaws.com/linkedinProfilePicture.png"
          alt="Profile picture"
          className="object-cover object-top w-full h-full"
          width={1000}
          height={900}
        />
      </div>
    </>
  );
};
