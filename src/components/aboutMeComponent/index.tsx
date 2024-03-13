import style from "./style.module.scss";
import iconJs from "../../assets/icons/iconJS.png";
import iconTs from "../../assets/icons/iconTS.png";
import iconNode from "../../assets/icons/iconNode.png";
import iconSass from "../../assets/icons/iconSass.png";
import iconReact from "../../assets/icons/iconReact.png";
import iconVs from "../../assets/iconTools/iconVs.png";
import iconDb from "../../assets/iconTools/iconDB.png";
import iconGit from "../../assets/iconTools/iconGit.png";
import iconFigma from "../../assets/iconTools/iconFigma.png";
import iconSlack from "../../assets/iconTools/iconSlack.png";
import { FormationsComponent } from "../formationsComponent";

export const AboutMeComponent = () => {
  return (
    <div className={style.container}>
      <h1>Sobre mim</h1>
      <div>
        <h2>Minhas habilidades principais</h2>
        <div className={style.containerImg}>
          <img src={iconJs} alt="icone javaScript" />
          <img src={iconTs} alt="icone typeScript" />
          <img src={iconNode} alt="icone Node.js" />
          <img src={iconReact} alt="icone React" />
          <img src={iconSass} alt="iconSass" />
        </div>
      </div>
      <div>
        <h2>Minhas Ferramentas principais</h2>
        <div className={style.containerImg}>
          <img src={iconVs} alt="icone vs code" />
          <img src={iconDb} alt="icone dBeaver" />
          <img src={iconGit} alt="icone git" />
          <img src={iconFigma} alt="icone figma" />
          <img src={iconSlack} alt="icone slack" />
        </div>
      </div>
      <FormationsComponent />
    </div>
  );
};
