"use client";
import { useState } from "react";
import { NavBarComponent } from "../navBar/NavBar";

export const SectionChangeComponent = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const handleSectionChange = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
    scrollToSection(sectionIndex);
  };

  const scrollToSection = (sectionIndex: number) => {
    const element = document.getElementById(`section-${sectionIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBarComponent
        activeSection={activeSection}
        handleSectionChange={handleSectionChange}
      />
    </>
  );
};
