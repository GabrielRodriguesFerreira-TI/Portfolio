import Image from "next/image";
import LogoPic from "../../../public/portfolio-icon.svg";
import Linkedin from "../../../public/icons8-linkedin.svg";
import GitHub from "../../../public/icons8-github.svg";
import Instagram from "../../../public/icons8-instagram.svg";

export const PresentationComponent = () => {
  return (
    <>
      <nav className="flex gap-3">
        <Image
          src={LogoPic}
          alt="Picture of the site logo"
          width={40}
          height={40}
        />
        <div className="flex w-full items-center justify-between">
          <div className="w-[25%]">
            <div className="h-1 bg-gray-400 w-full rounded" />
          </div>
          <div className="flex gap-2">
            <Image
              src={Linkedin}
              alt="Linkedin picture"
              width={35}
              height={35}
            />
            <Image src={GitHub} alt="Github picture" width={35} height={35} />
            <Image
              src={Instagram}
              alt="Instagram picture"
              width={35}
              height={35}
            />
          </div>
          <div className="w-[25%]">
            <div className="h-1 bg-gray-400 w-full rounded" />
          </div>
        </div>
      </nav>
      <div>
        <p>teste1</p>
      </div>
    </>
  );
};
