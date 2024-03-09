import { Project } from "../../../data";
import style from "./style.module.scss";
import iconApplication from "../../../assets/icons/iconApplication.png";
import iconGitHub from "../../../assets/icons/iconGithub.png";

export const CardComponent = ({
  title,
  description,
  image,
  techs,
  linkApplication,
  linkRepository,
}: Project) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerTitle}>
          <img src={image} alt="imagem projeto" />
          <h1>{title}</h1>
          <h2>Principais tecnologias:</h2>
        </div>
        <div className={style.containerTechs}>
          {techs.map((tech, index) => (
            <img key={index} src={tech} alt={`Tecnologia ${index + 1}`} />
          ))}
        </div>
        <div className={style.containerDescription}>
          <p>{description}</p>
        </div>
      </div>
      <div className={style.containerLinks}>
        <div>
          <img src={iconApplication} alt="icone aplicação" />
          <a href={linkApplication}>Aplicação</a>
        </div>
        <div>
          <img src={iconGitHub} alt="icone github" />
          <a href={linkRepository}>Repositório do projeto</a>
        </div>
      </div>
    </>
  );
};
