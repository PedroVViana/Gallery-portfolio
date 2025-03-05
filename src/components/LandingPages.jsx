import React, { useState } from "react";
import focus from "../assets/portfolio/work/focus.png"
import afago from "../assets/portfolio/work/afago.png"
import magrass from "../assets/portfolio/work/magrass.png"
import arImg from "../assets/portfolio/work/ar.png"
import psico from "../assets/portfolio/work/psico.png"
import curso from "../assets/portfolio/landingPage/curso.png"
import livro from "../assets/portfolio/landingPage/livro.png"
import tach from "../assets/portfolio/landingPage/tach.png"
import marketing from "../assets/portfolio/landingPage/marketing.png"
import consultoria from "../assets/portfolio/landingPage/consultoria.png"
import corretora from "../assets/portfolio/landingPage/corretora.png"
import personal from "../assets/portfolio/landingPage/personal.png"
import PsicoAna from "../assets/portfolio/landingPage/PsicoAna.png"
import vendasApp from "../assets/portfolio/landingPage/vendasApp.png"


// Estrutura básica do card com a URL da demo
const projects = [
  {
    id: 1,
    title: "Template Psicóloga Comportamental",
    imageUrl: psico,
    githubUrl: "https://github.com/seuusuario/projeto1",
    demoUrl: "https://pedrovviana.github.io/website-psicologa-comportamental/", // Novo campo para demo
    description: "Projeto de template de site para psicólogas que utilizam a metodologia de terapia cognitivo-comportamental.",
    tools: ["Vite", "React", "Tailwind CSS", "JavaScript" ],
  },
  {
    id: 2,
    title: "Focus Digital",
    imageUrl: focus,
    demoUrl: "https://lpfocusdigital.com/",
    description: "Projeto Freelancer de uma landing page para converter leads de uma empresa de assessoria de marketing digital.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"],
  },
  {
    id: 3,
    title: "Afago",
    imageUrl: afago,
    demoUrl: "https://comafago.com.br/",
    description: "Projeto Freelancer de uma landing page para venda de produtos, para uma loja de cestas de café da manhã.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"],
  },
  {
    id: 4,
    title: "Pica-pau Ar para Autos",
    imageUrl: arImg,
    demoUrl: "https://pica-pau-ar.netlify.app/",
    description: "Projeto freelancer para uma empresa de conserto de ar-condicionado automotivo.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"]
  },
  {
    id: 5,
    title: "Magrass Cabo Frio",
    imageUrl: magrass,
    demoUrl: "https://magrasscabofrio.com.br/",
    description: "Projeto de uma landing page para o lançamento de um produto da industria do emagrecimento, a landing page foi um sucesso, obtendo mais de 100 leads em um dia.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Site para venda de cursos online",
    imageUrl: curso,
    githubUrl: "https://github.com/PedroVViana/website-cursos-online",
    demoUrl: "https://pedrovviana.github.io/website-cursos-online/",
    description: "Projeto de templete para um site de venda de cursos online.",
    tools: ["Vite", "React", "Tailwind CSS", "TypeScript" ],
  },
  {
    id: 7,
    title: "Site para venda de produtos tecnológicos",
    imageUrl: tach,
    githubUrl: "https://github.com/PedroVViana/tach-product",
    demoUrl: "https://pedrovviana.github.io/tach-product/",
    description: "Projeto de templete para um site de produtos tecnológicos.",
    tools: ["Vite", "React", "Tailwind CSS", "TypeScript" ],
  },
  {
    id: 8,
    title: "Site de lançamento de livro",
    imageUrl: livro,
    githubUrl: "https://github.com/PedroVViana/book-release",
    demoUrl: "https://pedrovviana.github.io/book-release/",
    description: "Projeto de templete para um site de lançamento de um livro.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Site para empresa de marketing",
    imageUrl: marketing,
    githubUrl: "https://github.com/PedroVViana/marketing-landing-page",
    demoUrl: "https://pedrovviana.github.io/marketing-landing-page/",
    description: "Projeto de templete para um site para uma empresa de marketing.",
    tools: ["Vite", "React", "Tailwind CSS", "TypeScript" ],
  },
  {
    id: 10,
    title: "Site para consultoria",
    imageUrl: consultoria,
    demoUrl: "https://template-consultoria.netlify.app/",
    description: "Projeto de templete para um site para uma empresa de consultoria.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Site para corretora",
    imageUrl: corretora,
    demoUrl: "https://template-corretora.netlify.app/",
    description: "Projeto de templete para um site de uma corretora de imóveis.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Site para Personal Trainer",
    imageUrl: personal,
    demoUrl: "https://pedrovviana.github.io/Personal-Template/",
    description: "Projeto de templete para um site de personal trainer.",
    tools: ["Vite", "React", "CSS", "JavaScript"],
  },
  {
    id: 13,
    title: "Site para Psicologa feita com IA",
    imageUrl: PsicoAna,
    githubUrl: "https://github.com/PedroVViana/tach-product",
    demoUrl: "https://aquamarine-starlight-89cb23.netlify.app/",
    description: "Projeto de templete para um site de Psicologa feita com IA.",
    tools: ["Vite", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 14,
    title: "Site para vendas de apps",
    imageUrl: vendasApp,
    githubUrl: "https://github.com/PedroVViana/Template-venda-de-Aplicativo",
    demoUrl: "https://pedrovviana.github.io/Template-venda-de-Aplicativo//",
    description: "Projeto de templete para vendas de apps.",
    tools: ["Vite", "React", "Tailwind CSS", "TypeScript"],
  },
];

const LandingPages = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen px-2 py-3">
      <h2 className="text-2xl text-white font-bold mb-6">Meus Landing Pages</h2>

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

export default LandingPages;
