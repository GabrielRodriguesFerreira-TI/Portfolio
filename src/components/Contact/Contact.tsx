"use client";
import { useState } from "react";
import "../presentation/presentation.css";
import { CssTextField } from "./styles";
import Image from "next/image";
import Linkedin from "../../../public/icons8-linkedin.svg";
import GitHub from "../../../public/icons8-github.svg";
import Instagram from "../../../public/icons8-instagram.svg";

export const ContactComponent = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, title, message }),
      });

      const data = await response.json();

      setTimeout(() => {
        setEmail("");
        setTitle("");
        setMessage("");
      }, 100);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 mt-20 md:w-[35%]">
        <div className="text-start">
          <h3 className="gradient-text font-bold text-lg">Contato</h3>
          <h2 className="font-bold text-2xl mt-4">Um projeto? Alguma ideia?</h2>
        </div>
        <p className="text-gray-400 md:w-[70%]">
          Você pode me encontrar em algumas redes onde eu posto minhas criações,
          você também pode entrar em contato comigo para tirar suas dúvidas
          sobre preços e minha disponibilidade.
        </p>
        <nav className="flex gap-3 md:flex-col md:gap-12 md:fixed md:hidden">
          <div className="flex w-full items-center justify-between md:flex-col md:h-[84vh]">
            <div className="w-[45%] md:w-2 md:flex md:h-[35%]">
              <div className="h-1 bg-gray-400 w-full rounded md:h-[100%]" />
            </div>
            <div className="flex justify-around w-full gap-2 md:flex-col md:gap-8">
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-ferreira-27b21b243/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={Linkedin}
                  alt="Linkedin picture"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://github.com/GabrielRodriguesFerreira-TI"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={GitHub}
                  alt="Github picture"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://www.instagram.com/gabrielrodriguesj/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src={Instagram}
                  alt="Instagram picture"
                  width={35}
                  height={35}
                />
              </a>
            </div>
            <div className="w-[45%] md:w-2 md:flex md:h-[35%]">
              <div className="h-1 bg-gray-400 w-full rounded md:h-[100%]" />
            </div>
          </div>
        </nav>
      </div>
      <div className="w-full max-w-sm h-[55vh] rounded-lg bg-[#2B2B32]">
        <form
          className="w-full h-full p-4 flex flex-col justify-around items-center"
          onSubmit={handleSubmit}
        >
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Contato rápido</h3>
            <p className="text-gray-400 text-sm">
              Para estabelecer um primeiro contato rápido, basta preencher estes
              campos.
            </p>
          </div>
          <div className="flex flex-col p-4 gap-3 w-full">
            <CssTextField
              required={false}
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              className="text-sm w-full"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <CssTextField
              required={false}
              type="text"
              id="standard-basic"
              label="Assunto"
              variant="standard"
              className="text-sm w-full"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <CssTextField
            required={false}
            type="text"
            id="standard-basic"
            label="Conte-me sobre seu projeto"
            variant="standard"
            className="text-sm w-[90%]"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="w-[90%] h-11 rounded-3xl bg-violet-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
