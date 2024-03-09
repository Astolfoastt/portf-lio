
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { ProjectsPage } from './pages/projectsPage';


const AppContent: React.FC = () => {
 const location = useLocation();

 return (
    <div>
      <div id="home" style={{ display: location.pathname === '/' ? 'visible' : 'hidden'  }}>
        <HomePage />
      </div>
      <div id="projects" style={{ display: location.pathname === '/projects' ? 'visible' : 'hidden'  }}>
        <ProjectsPage />
      </div>
    </div>
 );
};

export default AppContent;
