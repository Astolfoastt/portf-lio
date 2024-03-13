import { formationsData } from "../../data";
import { CardComponent } from "./cardComponent";
import style from "./style.module.scss";

export const FormationsComponent = () => {
  return (
    <div className={style.container}>
      {formationsData.map((formation) => {
        return (
          <div key={formation.id}>
            <CardComponent
              id={formation.id}
              course={formation.course}
              institution={formation.institution}
              description={formation.description}
              status={formation.status}
            />
          </div>
        );
      })}
    </div>
  );
};
