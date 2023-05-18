import { NavBarProps } from "@/interfaces/navBar/navBar.types";

export const NavBarComponent: React.FC<NavBarProps> = ({
  activeSection,
  handleSectionChange,
}) => {
  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 flex-col items-center gap-5 hidden md:flex">
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 0 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(0)}
      ></button>
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 1 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(1)}
      ></button>
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 2 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(2)}
      ></button>
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 3 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(3)}
      ></button>
      <button
        className={`w-5 h-5 rounded-full mb-2 ${
          activeSection === 4 ? "bg-purple-600" : "bg-gray-400"
        }`}
        onClick={() => handleSectionChange(4)}
      ></button>
    </nav>
  );
};
