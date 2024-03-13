import React from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ProjectsPage } from "./pages/projectsPage";
import { ContactPage } from "./pages/contactPage";
import { AboutMePage } from "./pages/aboutMe";

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div
        id="home"
        style={{ display: location.pathname === "/" ? "visible" : "hidden" }}
      >
        <HomePage />
      </div>
      <div
        id="projects"
        style={{
          display: location.pathname === "/projects" ? "visible" : "hidden",
        }}
      >
        <ProjectsPage />
      </div>
      <div
        id="aboutme"
        style={{
          display: location.pathname === "/aboutme" ? "visible" : "hidden",
        }}
      >
        <AboutMePage />
      </div>
      <div
        id="contact"
        style={{
          display: location.pathname === "/contact" ? "visible" : "hidden",
        }}
      >
        <ContactPage />
      </div>
    </div>
  );
};

export default AppContent;
