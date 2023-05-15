import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 h-screen overflow-y-scroll">
      <div className="h-screen px-4">
        <p>Apresentação</p>
      </div>
      <div className="h-screen px-4">
        <p>Sobre mim</p>
      </div>
      <div className="h-screen px-4">
        <p>Meus projetos</p>
      </div>
      <div className="h-screen px-4">
        <p>Planejamento</p>
      </div>
      <div className="h-screen px-4">
        <p>Contato</p>
      </div>
    </main>
  );
}
