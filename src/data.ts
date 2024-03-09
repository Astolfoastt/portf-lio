import iconJS from "./assets/iconsProject/iconJS.png";
import iconReact from "./assets/iconsProject/iconReact.png";
import iconSass from "./assets/iconsProject/iconSass.png";
import iconTs from "./assets/iconsProject/iconTS.png";
import iconORM from "./assets/iconsProject/iconORM.png";
import iconExpress from "./assets/iconsProject/iconExpress.png";
import imgKenzieHub from "./assets/imagesProjects/imgKenzieHub.png";
import imgNuKenzie from "./assets/imagesProjects/imgNuKenzie.png";
import imgBackend from "./assets/imagesProjects/imgBackend.png";
import imgContactHub from "./assets/imagesProjects/imgContactHub.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techs: string[];
  linkApplication: string;
  linkRepository: string;
}

export interface Training {
  id: number;
  title: string;
  description: string;
  status: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Kenzie Hub",
    description:
      "Kenzie Hub é uma ferramenta para desenvolvedores poderem registrar seus avanços na programação registrando seu nível em uma tecnologia,o projeto conta com cadastro, login e autenticações.",
    image: imgKenzieHub,
    techs: [iconJS, iconReact, iconSass],
    linkApplication: "https://react-entrega-kenzie-hub-astolfoastt.vercel.app/",
    linkRepository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-Astolfoastt",
  },
  {
    id: 2,
    title: "Nu Kenzie",
    description:
      "Projeto desenvolvido para gerenciar finanças, podendo registrar valores e seus tipos, é um projeto com design responsivo e componentizado",
    image: imgNuKenzie,
    techs: [iconJS, iconSass],
    linkApplication:
      "https://react-entrega-s1-template-nu-kenzi-astolfoastt.vercel.app/",
    linkRepository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzi_Astolfoastt",
  },
  {
    id: 3,
    title: "Movies",
    description:
      "Api destinada a gerenciamento e aluguéis de filmes, podendo realizar um CRUD completo no gerenciamento de filmes, contendo páginação e autenticações necessárias.",
    image: imgBackend,
    techs: [iconTs, iconExpress, iconORM],
    linkApplication: "no content",
    linkRepository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm_Astolfoastt",
  },
  {
    id: 4,
    title: "Contact Hub",
    description:
      "Projeto Full-Stack, destinado a genrenciamento de contatos sendo possível a realização de login com autenticação, criação de contatos e gerenciamento dos contatos, o projeto conta com atentição, e validações necessárias para o gerenciamento de contatos",
    image: imgContactHub,
    techs: [iconJS, iconExpress, iconReact, iconSass],
    linkApplication: "https://contacthub-f.vercel.app/",
    linkRepository:
      "https://github.com/Astolfoastt/m5-projeto-final-kanvas-Astolfoastt",
  },
];

// export const formations: Training[] = [
//   {
  
//   }
// ];
