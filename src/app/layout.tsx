import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel RF - Portfólio",
  description:
    "Desenvolvedor Full-Stack Com experiência em HTML, CSS, JavaScript e TypeScript para criação de interfaces de usuário responsivas e atraentes, como para criação de tabelas e API Restful bem estruturadas e funcionais. Possuo sólido conhecimento de frameworks populares de Front-End e Back-End, como React, Next Js, Node Js, Express, Python, PostgreSQL, MongoDB e Docker, além de habilidades em desenvolvimento de softwares, como versionamento de código, integração contínua e testes automatizados. Experiência com técnicas de otimização de desempenho e SEO (Search Engine Optimization), uso contínuo metodologias ágeis, como Scrum ou Kanban. Forte habilidade de resolução de problemas e solução de bugs de forma eficiente e eficaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
