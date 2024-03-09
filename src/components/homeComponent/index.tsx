import style from "./style.module.scss";
import iconScroll from "../../assets/icons/iconScroll.png";
import { Link } from "react-scroll";
import cvAstDaniel from "../../assets/cv/cv-astdaniel.pdf";

export const HomeComponent = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvAstDaniel;
    link.download = "cvast-daniel.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={style.container}>
      <div className={style.containerPresentation}>
        <h1>Olá, eu sou o</h1>
        <span>Astolfo Daniel :)</span>
        <p>
          Sou desenvolvedor web, procuro sempre desenvolver projetos de forma
          clara e tecnológica. Atualmente sou estudante de Analise e
          Densenvolvimento de Sistemas na Estácio.
        </p>
        <div className={style.containerButtons}>
          <button className={style.buttonCv} onClick={handleDownload}>
            Baixe meu cv
          </button>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={style.buttonProjects}
          >
            Projetos
          </Link>
        </div>
        <img src={iconScroll} alt="icone de rolagem" />
      </div>
    </div>
  );
};
