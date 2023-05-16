import { StaticImageData } from "next/image";

export interface iSectionOptions {
  image: StaticImageData;
  index: number;
  projectName: string;
  description: string;
  link: string;
  sectionIndex: number;
}
