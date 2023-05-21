import { Dispatch, SetStateAction } from "react";

export interface iClientState {
  activeSection: number;
  setActiveSection: Dispatch<SetStateAction<number>>;
}

export interface iContextProps {
  children: React.ReactNode;
}
