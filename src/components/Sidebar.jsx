import React, { useState } from "react";
import {
  FaChevronLeft,
  FaLaptopCode,
  FaCog,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { AiOutlineLaptop, AiOutlineMenu } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FiFileText } from 'react-icons/fi';


const Sidebar = ({ setActiveComponent, toggleSidebar, isMinimized, activeComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setIsSidebarOpen(false); // Fechar o sidebar no mobile após clicar em uma opção
  };

  const toggleMobileSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSocialDropdown = () => {
    setIsSocialOpen(!isSocialOpen);
  };

  return (
    <div className="fixed z-50 shadow-lg">
      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-4 right-4 BgGradient text-white p-3 rounded-full shadow-lg z-50 lg:hidden"
        onClick={toggleMobileSidebar}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-[#1f1353] to-[#1a2356] text-white h-full fixed left-0 top-0 p-4 transform 
        ${isMinimized ? "w-20" : "w-64"} transition-width duration-500 ease-in-out z-40 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        style={{ transitionProperty: "width, transform" }}
      >
        {/* Sidebar Header */}
        <div
          className={`flex items-center overflow-hidden ${isMinimized ? "flex-col items-center" : "justify-between"} mb-4`}
        >
          {!isMinimized && <h2 className="text-xl font-bold whitespace-nowrap">Pedro Van-Lume</h2>}
          <button
            className={`text-white focus:outline-none ${isMinimized ? "mt-2" : ""}`}
            onClick={toggleSidebar}
          >
            <FaChevronLeft
              className={`transform transition-transform duration-300 ${isMinimized ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-2">
          {[
            { icon: <FaLaptopCode />, label: "Freelances" },
            { icon: <AiOutlineLaptop />, label: "Landing Pages" },
            { icon: <MdAnimation />, label: "Animações" },
            { icon: <FaCog />, label: "Sistemas" },
          ].map(({ icon, label }, index) => (
            <li
              key={index}
              onClick={() => handleComponentChange(label)}
              className={`py-2 cursor-pointer px-4 hover:bg-bgbluer rounded flex items-center relative 
              ${activeComponent === label ? "bg-bgbluer" : ""}`}
            >
              <div className="text-xl w-8 flex-shrink-0">{icon}</div>
              {!isMinimized && <span className="ml-3 overflow-hidden text-base">{label}</span>}
            </li>
          ))}

          {/* New "Currículo" link */}
          <li className="py-2 cursor-pointer px-4 hover:bg-bgbluer rounded flex items-center relative">
            <div className="text-xl w-8 flex-shrink-0">
              <FiFileText />
            </div>
            {!isMinimized && (
              <a
                href="https://pedrovviana.github.io/portfolio-PedroVanlume/" target="_blank"// Link para a página do currículo
                className="ml-3 overflow-hidden text-base"
              >
                Currículo
              </a>
            )}
          </li>
        </ul>

        <div className="border-t border-gray-600 my-4"></div>

       {/* Social Links */}
        <div className="mt-auto">
          {isMinimized ? (
            <div className="relative">
              <button
                onClick={toggleSocialDropdown}
                className="bg-bgbluer p-2 rounded-full w-12 h-12 flex justify-center items-center text-white focus:outline-none"
              >
                <AiFillPhone />
              </button>
              {isSocialOpen && (
                <div className="absolute top-14 left-0 bg-bgbluer p-2 rounded-md shadow-lg space-y-2">
                  {[
                    { icon: <FaTiktok/>, label: "Tiktok", link: "https://www.tiktok.com/@devlume__" },
                    { icon: <FaWhatsapp />, label: "Whatsapp", link: "https://web.whatsapp.com/send?phone=5581994952030" },
                    { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/devlume__/" },
                    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/pedro-vanlume-0230551b9/" },
                  ].map(({ icon, label, link }, index) => (
                    <div key={index} className="group relative flex justify-center gap-4">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg p-2"
                      >
                        {icon}
                      </a>
                      <span className="absolute left-10 bg-gray-700 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center gap-3 items-center">
              {[
                { icon: <FaTiktok/>, label: "Tiktok", link: "https://www.tiktok.com/@devlume__" },
                { icon: <FaWhatsapp />, label: "Whatsapp", link: "https://web.whatsapp.com/send?phone=5581994952030" },
                { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/devlume__/" },
                { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/pedro-vanlume-0230551b9/" },
              ].map(({ icon, label, link }, index) => (
                <div key={index} className="group flex justify-center relative">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg p-2"
                  >
                    {icon}
                  </a>
                  <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
