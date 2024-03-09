import { Modal } from "..";
import style from "./style.module.scss";
import iconHome from "../../../assets/icons/iconHome.png";
import iconProject from "../../../assets/icons/iconProjects.png";
import iconTraining from "../../../assets/icons/iconTraining.png";
import iconContact from "../../../assets/icons/iconContact.png";

interface ModalProps {
  toggleModal: () => void;
}

export const ModalMenu = ({ toggleModal }: ModalProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <nav className={style.container}>
        <ul className={style.containerUl}>
          <li>
            <div>
              <img src={iconHome} alt="icone inicio" />
              <span>Inicio</span>
            </div>
            <div>
              <img src={iconProject} alt="icone projetos" />
              <span>Projetos</span>
            </div>
            <div>
              <img src={iconTraining} alt="icone formações" />
              <span>Formações</span>
            </div>
            <div>
              <img src={iconContact} alt="icone contatos" />
              <span>Contatos</span>
            </div>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};
