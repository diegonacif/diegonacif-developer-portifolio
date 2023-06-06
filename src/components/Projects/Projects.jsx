import { Parallax } from "react-scroll-parallax"
import { useEffect } from "react";
import '../../App.scss';
import api from "../../services/api";

export const Projects = () => {
  useEffect(() => {
    async function getRepository() {
      await api
        .get(`/repos?per_page=100`)
        .then((response) => console.log(response.data[8].contents_url))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      }      
      getRepository();
    }, []);
  return (
    <section className="projects-container">
      <div className="projects-title">
        <Parallax 
          translateX={['-100px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <span>&lt;</span>
        </Parallax>
        <Parallax 
          translateY={['50px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <h2>Projetos</h2>
        </Parallax>
        <Parallax 
          translateX={['50px', '0px']}
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          style={{ zIndex: 10 }}
        >
          <span>&gt;</span>
        </Parallax>
      </div>
    </section>
  )
}
