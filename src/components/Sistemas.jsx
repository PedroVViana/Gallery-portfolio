import React, { useState } from "react";
import IMG1 from "../assets/portfolio/sistemas/1.png"
import IMG2 from "../assets/portfolio/sistemas/2.png"
import IMG3 from "../assets/portfolio/sistemas/3.png"
import IMG4 from "../assets/portfolio/sistemas/4.png"
import IMG5 from "../assets/portfolio/sistemas/5.png"
import IMG6 from "../assets/portfolio/sistemas/6.png"
import IMG7 from "../assets/portfolio/sistemas/7.png"
import IMG8 from "../assets/portfolio/sistemas/8.png"
import IMG9 from "../assets/portfolio/sistemas/9.png"
import IMG10 from "../assets/portfolio/sistemas/10.png"
import IMG11 from "../assets/portfolio/sistemas/11.png"
import IMG12 from "../assets/portfolio/sistemas/12.png"
import IMG13 from "../assets/portfolio/sistemas/13.png"
import IMG14 from "../assets/portfolio/sistemas/14.png"
import IMG15 from "../assets/portfolio/sistemas/15.png"

// Estrutura básica do card com a URL da demo
const projects = [
  {
    id: 1,
    title: "Sistema Login Cadastro",
    imageUrl: IMG1,
    githubUrl: "https://github.com/PedroVViana/Sistema-Login-Cadastro/tree/main",
    demoUrl: "https://system-register-devlume.netlify.app/", // Novo campo para demo
    description: "Projeto de um sistema de login e cadastro com autenticação de usuario.",
    tools: ["React", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Sistema de biblioteca",
    imageUrl: IMG2,
    githubUrl: "https://github.com/PedroVViana/System-Library-Java-back",
    description: "Projeto back-end de sistema de biblioteca em Java",
    tools: ["Java", "SQL"],
  },
  {
    id: 3,
    title: "Calculadora de Operacoes Basicas e Avancadas",
    imageUrl: IMG3,
    githubUrl: "https://github.com/PedroVViana/Calculadora-de-Operacoes-Basicas-e-Avancadas-Back",
    description: "Projeto back-end em Java de uma Calculadora de Operacoes Basicas e Avancadas.",
    tools: ["Java"],
  },
  {
    id: 4,
    title: "Conversor Medidas",
    imageUrl: IMG4,
    githubUrl: "https://github.com/PedroVViana/Conversor-Medidas-Back",
    description: "Projeto back-end em Java de um conversor de medidas.",
    tools: ["Java"],
  },
  {
    id: 5,
    title: "Gerenciador de Inventário",
    imageUrl: IMG5,
    githubUrl: "https://github.com/PedroVViana/Inventory-manager",
    demoUrl: "https://fantastic-pavlova-6430ae.netlify.app/",
    description: "projeto de sistema de gerenciador de inventário.",
    tools: ["React", "Tailwind", "Vite","Javascript","localstage"],
  },
  {
    id: 6,
    title: "Chat em Tempo real",
    imageUrl: IMG6,
    githubUrl: "https://github.com/PedroVViana/Real-Time-Chat",
    description: "Projeto web fullstack de um chat em tempo real, com servidor em Node.js e Express e front em React.js.",
    tools: ["React", "CSS", "Vite","Javascript","Node.js","Express","Socket.io"],
  },
  {
    id: 7,
    title: "Bot cobrancas whatsapp",
    imageUrl: IMG7,
    githubUrl: "https://github.com/PedroVViana/Bot-cobrancas-whatsapp",
    description: "Projeto pessoal desenvolvido em Python que consiste na criação de um bot para mandar mensagens automáticas e personalizadas para números dentro de uma planilha Excel. O código analisa os dados da tabela e com base neles manda uma mensagem de cobrança para cada nome da tabela.",
    tools: ["Python", "Pyautogui","Webbrowser","os"],
  },
  {
    id: 8,
    title: "Pomodoro Timer",
    imageUrl: IMG8,
    githubUrl: "https://github.com/PedroVViana/Pomodoro-Timer",
    demoUrl: "https://dev-timepomodoro.netlify.app/",
    description: "Projeto de um timer para tecnica de concentração chamada Pomodoro.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Bloco de notas",
    imageUrl: IMG9,
    githubUrl: "https://github.com/PedroVViana/Stickv-Notes",
    demoUrl: "https://relaxed-jelly-660ebc.netlify.app/",
    description: "Projeto de um bloco de notas.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Pokedex",
    imageUrl: IMG10,
    githubUrl: "https://github.com/PedroVViana/Pokedex",
    demoUrl: "https://pokedexprojectpedro.netlify.app/",
    description: "Projeto de consumo de API do pokemon.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Lista de Tarefas",
    imageUrl: IMG11,
    githubUrl: "https://github.com/PedroVViana/TO-DO-APP",
    description: "Projeto de uma lista de tarefas.",
    tools: ["React", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Editor de imagem",
    imageUrl: IMG12,
    githubUrl: "https://github.com/PedroVViana/Project-EditPhotos",
    demoUrl: "https://edit-photos-pedro.netlify.app/",
    description: "Projeto de uma lista de tarefas.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 13,
    title: "Jogo de carro 3D",
    imageUrl: IMG13,
    githubUrl: "https://github.com/PedroVViana/Jogo-de-carro-3D/tree/main/Dash.github.io-main",
    demoUrl: "https://game-cart-3d.netlify.app/",
    description: "Jogo de carro em 3D.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 14,
    title: "Jogo da cobrinha",
    imageUrl: IMG14,
    githubUrl: "https://github.com/PedroVViana/Recriando_o_Snake_Game",
    demoUrl: "https://snakegamer1001.netlify.app/",
    description: "Famoso jogo de celular da cobra que aumenta de tamanho.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Clone da página inicial do instagram",
    imageUrl: IMG15,
    githubUrl: "https://github.com/PedroVViana/Recriando-pagina-incial-do-Instagram",
    demoUrl: "https://clonepageinsta.netlify.app/",
    description: "Clone da página inicial do instagram.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const Sistemas = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen px-2 py-3">
      <h2 className="text-2xl text-white font-bold mb-6">Meus Sistemas</h2>

      {/* Galeria de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="BGblur shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 transform hover:shadow-2xl flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-center items-center flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-center mt-2 gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white text-sm px-3 py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white text-sm px-3 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                Demo
                </a>
                <button
                  onClick={() => openModal(project)}
                  className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Mais Informações
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="BGblur2 rounded-lg p-6 w-full max-w-md relative">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h2>

            {/* Imagem adicionada ao modal */}
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <p className="mb-4">{selectedProject.description}</p>
            <h3 className="font-bold mb-2">Ferramentas Utilizadas:</h3>
            <ul className="flex items-center flex-wrap gap-2 list-none mb-4">
              {selectedProject.tools.map((tool, index) => (
                <li className="BgGradient text-white text-sm px-4 py-2 rounded transition-colors" key={index}>{tool}</li>
              ))}
            </ul>
            <div className="flex justify-center gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Demo
              </a>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sistemas;
