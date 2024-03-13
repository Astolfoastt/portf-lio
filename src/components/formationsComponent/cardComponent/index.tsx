import { Training } from "../../../data";
import style from "./style.module.scss";

export const CardComponent = ({
  course,
  institution,
  description,
  status,
}: Training) => {
  return (
    <div className={style.container}>
      <div className={style.containerCourse}>
        <div className={style.containerTitle}>
          <img src={status} alt="status curso" />
          <h1>{institution}</h1>
          <span>{course}</span>
        </div>
      </div>
      <div className={style.containerDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
};
