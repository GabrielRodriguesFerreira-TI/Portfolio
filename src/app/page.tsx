import { ContactComponent } from "@/components/Contact/Contact";
import { AboutMeComponent } from "@/components/aboutMe/AboutMe";
import { PlanningComponent } from "@/components/planning/Planning";
import { PresentationComponent } from "@/components/presentation/Presentation";
import { ProjectsComponent } from "@/components/projects/Projects";
import { SectionChangeComponent } from "@/components/sectionChange/SectionChange";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 h-screen overflow-y-scroll bg-gradient">
      <SectionChangeComponent />
      <section
        id="section-0"
        className="h-screen px-4 py-2 flex flex-col gap-28 md:flex-row"
      >
        <PresentationComponent />
      </section>
      <section
        id="section-1"
        className="h-screen px-4 flex flex-col items-center gap-3 justify-around md:flex-row md:justify-center md:gap-16 md:py-4 md:px-20 md:relative"
      >
        <AboutMeComponent />
      </section>
      <section
        id="section-2"
        className="h-screen px-4 flex flex-col gap-52 md:px-12"
      >
        <ProjectsComponent />
      </section>
      <section
        id="section-3"
        className="h-screen px-4 flex flex-col gap-12 md:items-center md:gap-24"
      >
        <PlanningComponent />
      </section>
      <section
        id="section-4"
        className="h-screen px-4 flex flex-col items-center gap-14 md:flex-row md:justify-center md:px-14"
      >
        <ContactComponent />
      </section>
    </main>
  );
}
