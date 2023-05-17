import "../presentation/presentation.css";

export const PlanningComponent = () => {
  return (
    <>
      <div className="text-center">
        <strong className="text-bold gradient-text">Planejamento</strong>
        <h2 className="font-bold text-4xl py-4">Como eu trabalho</h2>
      </div>
      <ul className="flex flex-col gap-14 p-4 justify-center">
        <li className="w-[90%] flex flex-col items-start gap-2">
          <h3 className="font-bold gradient-text text-xl">01</h3>
          <h2 className="font-bold text-3xl">Estrutura</h2>
          <p className="text-gray-400 text-sm">
            Começo criando um esqueleto do modelo para trabalhar da melhor forma
            possivel em uma navegação agradável com o usuário ou integração com
            o Front-End
          </p>
        </li>
        <li className="w-[90%] flex flex-col items-start gap-2">
          <h3 className="font-bold gradient-text text-xl">02</h3>
          <h2 className="font-bold text-3xl">Construção</h2>
          <p className="text-gray-400 text-sm">
            Em seguida, já com o esquelo pronto, começo a construir as colunas
            do meu projeto com a utilização de testes integrados e unitarios,
            que será por onde todo meu projeto irá se basear, alem do
            monitoramento dos testes e build por Pipelines.
          </p>
        </li>
        <li className="w-[90%] flex flex-col items-start gap-2">
          <h3 className="font-bold gradient-text text-xl">03</h3>
          <h2 className="font-bold text-3xl">Finalizando</h2>
          <p className="text-gray-400 text-sm">
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
