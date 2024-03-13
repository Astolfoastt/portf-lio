import { AboutMeComponent } from "../../components/aboutMeComponent";
import style from "./style.module.scss";

export const AboutMePage = () => {
  return (
    <main className={style.container}>
      <AboutMeComponent />
    </main>
  );
};
