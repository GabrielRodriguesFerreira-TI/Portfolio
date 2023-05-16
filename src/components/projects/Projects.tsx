import "../presentation/presentation.css";

export const ProjectsComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <strong className="text-xl font-bold gradient-text">Projetos</strong>
        <h2 className="text-3xl font-bold">Meus projetos recentes</h2>
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#2B2B32] w-[95%] h-[230px] rounded-xl">
            <section></section>
            <section></section>
            <section></section>
          </div>
          <button className="bg-violet-600 w-10 h-10 rounded-full">f</button>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <span className="bg-[#72757E] w-10 h-2 rounded-full"></span>
          <span className="bg-[#72757E] w-10 h-2 rounded-full"></span>
          <span className="bg-[#72757E] w-10 h-2 rounded-full"></span>
        </div>
      </div>
    </>
  );
};
