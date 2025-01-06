import React, { useState } from "react";
import IMG1 from "../assets/portfolio/animacoes/1.png"
import IMG2 from "../assets/portfolio/animacoes/2.png"
import IMG3 from "../assets/portfolio/animacoes/3.png"
import IMG4 from "../assets/portfolio/animacoes/4.png"
import IMG5 from "../assets/portfolio/animacoes/5.png"
import IMG6 from "../assets/portfolio/animacoes/6.png"
import IMG7 from "../assets/portfolio/animacoes/7.png"
import IMG8 from "../assets/portfolio/animacoes/8.png"
import IMG9 from "../assets/portfolio/animacoes/9.png"
import IMG10 from "../assets/portfolio/animacoes/10.png"
import IMG11 from "../assets/portfolio/animacoes/11.png"
import IMG12 from "../assets/portfolio/animacoes/12.png"
import IMG13 from "../assets/portfolio/animacoes/13.png"
import IMG14 from "../assets/portfolio/animacoes/14.png"

// Estrutura básica do card com a URL da demo
const projects = [
  {
    id: 1,
    title: "Design A 3D UI Card",
    imageUrl: IMG1,
    githubUrl: "https://github.com/PedroVViana/Design-A-3D-UI-Card",
    demoUrl: "https://dancing-selkie-04a41b.netlify.app/", // Novo campo para demo
    description: "Projeto de card com animação 3D.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Button Social midia 3D Vanilla",
    imageUrl: IMG2,
    githubUrl: "https://github.com/PedroVViana/icons-3D/tree/main/icons%203D/3D%20Icones%20com%20efeito%20hover%20CSS%20e%20JS",
    demoUrl: "https://benevolent-moxie-3da28f.netlify.app/",
    description: "Botôes de social midia com animação 3D e efeito vanilha",
    tools: ["HTML", "CSS", "Javascript","Vanilla"],
  },
  {
    id: 3,
    title: "Button Social midia 3D",
    imageUrl: IMG3,
    githubUrl: "https://github.com/PedroVViana/icons-3D/tree/main/icons%203D/3D%20Icones%20com%20efeito%20hover%20CSS",
    demoUrl: "https://kaleidoscopic-blini-a16bcc.netlify.app/",
    description: "Botôes de social midia com animação 3D sem javascript",
    tools: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "CSS 3D Circle Loader Effects",
    imageUrl: IMG4,
    githubUrl: "https://github.com/PedroVViana/ProjectFront/tree/main/Anima%C3%A7%C3%B5es%20JS/CSS%203D%20Wavy%20Circle%20Loader%20Animation%20Effects",
    demoUrl: "https://super-eclair-9c6857.netlify.app/",
    description: "Animação de loading 3D com efeito de circulo.",
    tools: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Animação de Cubo 3D",
    imageUrl: IMG5,
    githubUrl: "https://github.com/PedroVViana/Cubo3D",
    demoUrl: "https://spectacular-banoffee-0bd846.netlify.app/",
    description: "Animação simples de dois cubos em 3D.",
    tools: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "NeoSphere 3D Card",
    imageUrl: IMG6,
    githubUrl: "https://github.com/PedroVViana/NeoSphere-3D-Card",
    demoUrl: "https://neosphere-3d-card.netlify.app/",
    description: "Descrição detalhada do Projeto 3.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Olhos acompanham o mouse",
    imageUrl: IMG7,
    githubUrl: "https://github.com/PedroVViana/Olhos-seguidores",
    demoUrl: "https://mellifluous-dodol-7483b7.netlify.app/",
    description: "Boneco feito com HTML e CSS, que os olhos acompanham o mouse do computador",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Cards com efeito liquido",
    imageUrl: IMG8,
    githubUrl: "https://github.com/PedroVViana/liquid-effect",
    demoUrl: "https://spectacular-malasada-15919f.netlify.app/",
    description: "Projeto de dois cards com efeito de liquido quando se cruzam.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Barra de pesquisa com efeito de teclado",
    imageUrl: IMG9,
    githubUrl: "https://github.com/PedroVViana/ProjectFront/tree/main/Anima%C3%A7%C3%B5es%20JS/Efeito%20Teclado",
    demoUrl: "https://beamish-crisp-c630bf.netlify.app/",
    description: "Projeto de barra de pesquisa com efeito de teclado branco.",
    tools: ["HTML", "CSS"],
  },
  {
    id: 10,
    title: "Livro com animação 3D",
    imageUrl: IMG10,
    githubUrl: "https://github.com/PedroVViana/ProjectFront/tree/main/Anima%C3%A7%C3%B5es%20JS/Book%203D",
    demoUrl: "https://warm-paprenjak-24a6af.netlify.app/",
    description: "Projeto de criar um livro com animação 3D.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Rotação 3D",
    imageUrl: IMG11,
    githubUrl: "https://github.com/seuusuario/projeto3",
    demoUrl: "https://incandescent-phoenix-cdacb7.netlify.app/",
    description: "Projeto com animação de rotação e troca de imagens com efeito de hover.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Ligar e desligar lampada",
    imageUrl: IMG12,
    githubUrl: "https://github.com/PedroVViana/Lampada",
    demoUrl: "https://dazzling-axolotl-ee91aa.netlify.app/",
    description: "Projeto de um botão de ligar e desligar lampada.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 13,
    title: "Carta de dia dos namorados",
    imageUrl: IMG13,
    githubUrl: "https://github.com/PedroVViana/Carta-de-dia-dos-namorados",
    demoUrl: "https://sweet-pixie-a15999.netlify.app/",
    description: "Projeto para carta de dia dos namorados.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 14,
    title: "Cards Shoes 3D",
    imageUrl: IMG14,
    githubUrl: "https://github.com/PedroVViana/Cards-Shoes-3D",
    demoUrl: "https://kaleidoscopic-torrone-e1b7c2.netlify.app/",
    description: "Projeto para card de produtos de tenis em 3D.",
    tools: ["HTML", "CSS", "JavaScript","Vanilla"],
  },
];

const Animacoes = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen px-2 py-3">
      <h2 className="text-2xl text-white font-bold mb-6">Minhas Animações</h2>

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

export default Animacoes;
