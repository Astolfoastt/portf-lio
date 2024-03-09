import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { projectsData } from "../../data";
import { CardComponent } from "./cardComponent";
import { StacksComponent } from "./stacksComponent";
import style from "./style.module.scss";
import { ToolsComponent } from "./toolsComponents";

const ProjectsComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    prevArrow: <div />,
    nextArrow: <div />,
  };

  return (
    <div className={style.container}>
      <div className={style.containerPresentation}>
        <h1>Meus Projetos!</h1>
        <p>
          Aqui você encontra meus projetos já feitos e em andamento, para mais
          detalhes, acesse meu{" "}
          <a href="https://github.com/Astolfoastt" target="_blank">
            Github!
          </a>
        </p>
        <StacksComponent />
        <ToolsComponent />
      </div>
      <div className={style.containerProjects}>
        <Slider ref={sliderRef} {...settings}>
          {projectsData.map((project) => (
            <div key={project.id}>
              <CardComponent
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                techs={project.techs}
                linkApplication={project.linkApplication}
                linkRepository={project.linkRepository}
              />
            </div>
          ))}
        </Slider>
        <button
          className={style.customPrev}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          &#10094;
        </button>
        <button
          className={style.customNext}
          onClick={() => sliderRef.current?.slickNext()}
        >
          &#10095;
        </button>
        {/* <div className={style.containerLinkedin}>
          <h1>Vamos conversar!</h1>
          <p>
            Bora fazer uma conexão e discutir projetos e quem sabe até fazer um,
            acesse meu{" "}
            <a href="https://github.com/Astolfoastt" target="_blank">
              LinkeIn!
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsComponent;
