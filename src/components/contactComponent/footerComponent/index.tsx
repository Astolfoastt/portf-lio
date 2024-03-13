import style from "./style.module.scss";
import iconEmail from "../../../assets/footer/iconEmail.png";
import iconLinkedin from "../../../assets/footer/iconLinkedin.png";
import iconGithub from "../../../assets/footer/iconGithub.png";

export const FooterComponent = () => {
  return (
    <footer className={style.container}>
      <p>
        Obrigado por explorar meu portfólio! Estou ansioso para futuras
        colaborações e oportunidades de aprendizado. Seja para discutir
        projetos, compartilhar ideias ou simplesmente bater um papo, estou à
        disposição. Vamos criar conexões e construir juntos. Estou esperando
        pela nossa próxima conversa!
      </p>
      <div>
        <div>
          <img src={iconEmail} alt="icone email" />
          <span>astdaniel.dev@gmail.com</span>
        </div>
        <div>
          <img src={iconLinkedin} alt="icone linkedin" />
          <a href="https://www.linkedin.com/in/astolfo-daniel/" target="_blank">
            @astolfo-daniel
          </a>
        </div>
        <div>
          <img src={iconGithub} alt="iconGithub" />
          <a href="https://github.com/Astolfoastt" target="_blank">
            Astolfoastt (github.com)
          </a>
        </div>
      </div>
    </footer>
  );
};
