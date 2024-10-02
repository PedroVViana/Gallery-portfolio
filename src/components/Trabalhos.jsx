import React, { useState } from "react";
import vlImg from "../assets/portfolio/work/vl-dask.jpeg"
import focus from "../assets/portfolio/work/focus.png"
import afago from "../assets/portfolio/work/afago.png"
import magrass from "../assets/portfolio/work/magrass.png"
import arImg from "../assets/portfolio/work/ar.png"

// Estrutura básica do card com a URL da demo
const projects = [
  {
    id: 1,
    title: "VL Imports",
    imageUrl: vlImg,
    githubUrl: "https://github.com/seuusuario/projeto1",
    demoUrl: "https://seusite.com/projeto1", // Novo campo para demo
    description: "Projeto Freelancer de um catalogo web para uma loja virtual de vendas de camisa de time.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Focus Digital",
    imageUrl: focus,
    demoUrl: "https://seusite.com/projeto2",
    description: "Projeto Freelancer de uma landing page para converter leads de uma empresa de assessoria de marketing digital.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"],
  },
  {
    id: 3,
    title: "Afago",
    imageUrl: afago,
    demoUrl: "https://seusite.com/projeto3",
    description: "Projeto Freelancer de uma landing page para venda de produtos, para uma loja de cestas de café da manhã.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"],
  },
  {
    id: 4,
    title: "Pica-pau Ar para Autos",
    imageUrl: arImg,
    demoUrl: "https://seusite.com/projeto3",
    description: "Projeto freelancer para uma empresa de conserto de ar-condicionado automotivo.",
    tools: ["HTML", "CSS", "JavaScript", "Booststrap"]
  },
  {
    id: 5,
    title: "Magrass Cabo Frio",
    imageUrl: magrass,
    demoUrl: "https://seusite.com/projeto3",
    description: "Projeto de uma landing page para o lançamento de um produto da industria do emagrecimento, a landing page foi um sucesso, obtendo mais de 100 leads em um dia",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const Trabalhos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen px-2 py-3">
      <h2 className="text-2xl text-white font-bold mb-6">Meus Freelas</h2>

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

export default Trabalhos;
