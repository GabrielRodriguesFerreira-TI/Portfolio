import "./planning.scss";
import "../presentation/presentation.scss";
import Linha from "../../../public/Linha.svg";
import Vector from "../../assets/Vector.svg";
import Image from "next/image";

export const PlanningComponent = () => {
  return (
    <>
      <div className="text-center md:text-start md:w-[75%] md:mt-32">
        <strong className="text-bold gradient-text">Planejamento</strong>
        <h2 className="font-bold text-4xl py-4">Como eu trabalho</h2>
      </div>
      <ul className="flex flex-col p-4 gap-14 justify-center md:flex-row md:w-[85%] md:gap-24 md:p-0 relative lg:gap-32">
        <Image src={Vector} alt="Vector" className="vector_svg" />
        <Image src={Linha} alt="Linha" className="line_svg" />
        <li
          className="w-[90%] flex flex-col items-start overflow-hidden justify-center gap-2 md:w-[35%] box-animation rounded-md p-2"
          style={{ zIndex: 1 }}
        >
          <span></span>
          <h3 className="font-bold gradient-text text-xl" style={{ zIndex: 2 }}>
            01
          </h3>
          <h2 className="font-bold text-3xl" style={{ zIndex: 2 }}>
            Estrutura
          </h2>
          <p
            className="text-gray-400 text-sm md:text-base"
            style={{ zIndex: 2 }}
          >
            Começo criando um esqueleto do modelo para trabalhar da melhor forma
            possivel em uma navegação agradável com o usuário ou integração com
            o Front-End
          </p>
        </li>
        <li
          className="w-[90%] flex flex-col items-start overflow-hidden justify-center gap-2 md:w-[35%] box-animation rounded-md p-2"
          style={{ zIndex: 1 }}
        >
          <span></span>
          <h3 className="font-bold gradient-text text-xl" style={{ zIndex: 2 }}>
            02
          </h3>
          <h2 className="font-bold text-3xl" style={{ zIndex: 2 }}>
            Construção
          </h2>
          <p
            className="text-gray-400 text-sm md:text-base"
            style={{ zIndex: 2 }}
          >
            Em seguida, já com o esquelo pronto, começo a construir as colunas
            do meu projeto com a utilização de testes integrados e unitarios,
            que será por onde todo meu projeto irá se basear, alem do
            monitoramento dos testes e build por Pipelines.
          </p>
        </li>
        <li
          className="w-[90%] flex flex-col items-start overflow-hidden justify-center gap-2 md:w-[35%] box-animation rounded-md p-2"
          style={{ zIndex: 1 }}
        >
          <span></span>
          <h3 className="font-bold gradient-text text-xl" style={{ zIndex: 2 }}>
            03
          </h3>
          <h2 className="font-bold text-3xl" style={{ zIndex: 2 }}>
            Finalizando
          </h2>
          <p
            className="text-gray-400 text-sm md:text-base"
            style={{ zIndex: 2 }}
          >
            E com o toque final, antes de colocar a aplicação para produção, é
            feito o deploy para um ambiente de desenvolvimento, onde irá
            acontecer os testes finais end-to-end, dando caminho para o deploy
            em produção e finalizando o MVP do projeto.
          </p>
        </li>
      </ul>
    </>
  );
};
