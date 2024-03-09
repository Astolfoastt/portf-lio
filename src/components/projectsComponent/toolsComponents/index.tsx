
import iconVs from "../../../assets/iconTools/iconVs.png"
import iconGit from "../../../assets/iconTools/iconGit.png"
import iconDb from "../../../assets/iconTools/iconDB.png"
import iconFigma from "../../../assets/iconTools/iconFigma.png"
import iconSlack from "../../../assets/iconTools/iconSlack.png"
import style from "./style.module.scss";

export const ToolsComponent = () => {
  return (
    <ul className={style.container}>
      <li className={style.VS}>
        <hr />
        <img src={iconVs} alt="icone javaScript" />
        <span className={style.iconName}>Visual Studio</span>
      </li>
      <li className={style.Git}>
        <hr />
        <img src={iconGit} alt="icone typescript" />
        <span className={style.iconName}>Git</span>
      </li>
      <li className={style.Db}>
        <hr />
        <img src={iconDb} alt="icone node.js" />
        <span className={style.iconName}>Dbeaver</span>
      </li>
      <li className={style.Figma}>
        <hr />
        <img src={iconFigma} alt="icone react" />
        <span className={style.iconName}>Figma</span>
      </li>
      <li className={style.Slack}>
        <hr />
        <img src={iconSlack} alt="icone sass" />
        <span className={style.iconName}>Slack</span>
      </li>
    </ul>
  );
};
