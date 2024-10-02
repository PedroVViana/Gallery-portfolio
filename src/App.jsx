import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Trabalhos from "./components/Trabalhos";
import LandingPages from "./components/LandingPages";
import Portfolios from "./components/Portfolios";
import Animacoes from "./components/Animacoes";
import Sistemas from "./components/Sistemas";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Works");
  const [isMinimized, setIsMinimized] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Freelances":
        return <Trabalhos />;
      case "Landing Pages":
        return <LandingPages />;
      case "Templates":
        return <Portfolios />;
      case "Animações":
        return <Animacoes />;
      case "Sistemas":
        return <Sistemas />;
      default:
        return <Trabalhos />;
    }
  };

  return (
    <div className="lg:flex">
      {/* Sidebar */}
      <Sidebar 
        setActiveComponent={setActiveComponent} 
        toggleSidebar={() => setIsMinimized(!isMinimized)} 
        isMinimized={isMinimized} 
        activeComponent={activeComponent} 
      />
      
      {/* Main Content Area */}
      <div 
        className={`flex-1 bg-gradient-to-b from-[#2e2466] to-[#0f1b67] transition-all duration-300 
        ${isMinimized ? "lg:ml-20" : "lg:ml-64"} p-4 min-h-screen`}
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
