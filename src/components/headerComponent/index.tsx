import { useState } from "react";
import iconMenu from "../../assets/icons/iconMenu.png";
import style from "./style.module.scss";
import { ModalMenu } from "../modalComponent/menuModal";
import iconHome from "../../assets/icons/iconHome.png";
import iconProject from "../../assets/icons/iconProjects.png";
import iconTraining from "../../assets/icons/iconTraining.png";
import iconContact from "../../assets/icons/iconContact.png";

export const HeaderComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <header className={style.container}>
      <div className={style.containerLogo}>
        <span>&lt;astt.dev/&gt;</span>
      </div>
      <div className={style.containerMenu}>
        <img src={iconMenu} alt="icone menu" onClick={toggleModal} />
        {isOpenModal && <ModalMenu toggleModal={toggleModal} />}
      </div>
      <nav className={style.containerMenuDeskTop}>
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
              <img src={iconContact} alt="icone contatos"  className={style.btnContacts}/>
              <span>Contatos</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
