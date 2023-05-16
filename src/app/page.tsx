import { AboutMeComponent } from "@/components/aboutMe/AboutMe";
import { PresentationComponent } from "@/components/presentation/Presentation";
import { ProjectsComponent } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 h-screen overflow-y-scroll">
      <section className="h-screen px-4 py-2 flex flex-col gap-28 md:flex-row">
        <PresentationComponent />
      </section>
      <section className="h-screen px-4 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-36 md:py-4 md:px-16">
        <AboutMeComponent />
      </section>
      <section className="h-screen px-4 flex flex-col gap-52 md:px-16">
        <ProjectsComponent />
      </section>
      <section className="h-screen px-4">
        <p>Planejamento</p>
      </section>
      <section className="h-screen px-4">
        <p>Contato</p>
      </section>
    </main>
  );
}
