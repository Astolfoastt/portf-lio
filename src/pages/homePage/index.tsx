import { HomeComponent } from "../../components/homeComponent";
import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <main className={style.container}>
      <HomeComponent />
    </main>
  );
};
