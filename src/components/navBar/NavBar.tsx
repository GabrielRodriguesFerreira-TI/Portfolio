import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { NavBarProps } from "@/interfaces/navBar/navBar.types";

export const NavBarComponent: React.FC<NavBarProps> = ({
  activeSection,
  handleSectionChange,
}) => {
  return (
    <nav
      className="fixed right-5 top-1/2 transform -translate-y-1/2 flex-col items-center gap-5 hidden md:flex"
      style={{ zIndex: 2 }}
    >
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 0 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(0)}
        data-tooltip-id="section-1"
        data-tooltip-content="Apresentação"
      ></button>
      <Tooltip id="section-1" place="right" />
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 1 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(1)}
        data-tooltip-id="section-2"
        data-tooltip-content="Sobre"
      ></button>
      <Tooltip id="section-2" place="right" />
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 2 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(2)}
        data-tooltip-id="section-3"
        data-tooltip-content="Projetos"
      ></button>
      <Tooltip id="section-3" place="right" />
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 3 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(3)}
        data-tooltip-id="section-4"
        data-tooltip-content="Planejamento"
      ></button>
      <Tooltip id="section-4" place="right" />
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 4 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(4)}
        data-tooltip-id="section-5"
        data-tooltip-content="Contato"
      ></button>
      <Tooltip id="section-5" place="right" />
    </nav>
  );
};
