import iconJs from "../../../assets/icons/iconJS.png";
import iconTs from "../../../assets/icons/iconTS.png";
import iconNode from "../../../assets/icons/iconNode.png";
import iconReact from "../../../assets/icons/iconReact.png";
import iconSass from "../../../assets/icons/iconSass.png";
import style from "./style.module.scss";

export const StacksComponent = () => {
  return (
    <ul className={style.container}>
      <li className={style.JS}>
        <hr />
        <img src={iconJs} alt="icone javaScript" />
        <span className={style.iconName}>JavaScript</span>
      </li>
      <li className={style.TS}>
        <hr />
        <img src={iconTs} alt="icone typescript" />
        <span className={style.iconName}>TypeScript</span>
      </li>
      <li className={style.Node}>
        <hr />
        <img src={iconNode} alt="icone node.js" />
        <span className={style.iconName}>Node.js</span>
      </li>
      <li className={style.React}>
        <hr />
        <img src={iconReact} alt="icone react" />
        <span className={style.iconName}>React</span>
      </li>
      <li className={style.Sass}>
        <hr />
        <img src={iconSass} alt="icone sass" />
        <span className={style.iconName}>Sass</span>
      </li>
    </ul>
  );
};
