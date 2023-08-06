import { useEffect, useState } from "react";
import api from "../../services/api";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import '../../App.scss';

export const Projects = () => {
  const [imageData, setImageData] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const filteredReposList = ['atto-rpg-2', 'totalink-page', 'pokedex-react']

  const filteredRepos = repositories.filter((objeto) =>
    filteredReposList.includes(objeto.name)
  );

  useEffect(() => {
    filteredRepos.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [filteredRepos])

  // Fetching repositories
  useEffect(() => {
    const getRepositories = async () => {
      try {
        const response = await api.get("/repos?per_page=100");
        setRepositories(response.data);
      } catch (error) {
        console.error("Ops! Ocorreu um erro:", error);
      }
    };

    getRepositories();
  }, []);

  // Fetching main screenshots
  useEffect(() => {
    if(loading) {
      console.log("loading")
    } else {
      const fetchImagesFromRepositories = async () => {
        try {
          const imageUrls = [];
    
          for (let i = 0; i < filteredRepos.length; i++) {
            const contentsUrl = filteredRepos[i]?.contents_url;
            const response = await api.get(contentsUrl?.replace("{+path}", ""));
            const contents = response.data;
            const contentsArray = Array.isArray(contents) ? contents : [contents];
    
            const imageFiles = contentsArray.filter((file) => {
              const extensions = [".png", ".jpg", ".jpeg", ".gif"];
              const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
              return extensions.includes(fileExtension);
            });

            for (const image of imageFiles) {
              imageUrls.push({ url: image.download_url, repositoryId: filteredRepos[i].id });
            }
          }
          setImageData(imageUrls);
        } catch (error) {
          console.error("Ocorreu um erro ao recuperar as imagens:", error);
        }
      };
      fetchImagesFromRepositories();
    }
  }, [loading]);

  return (
    <section className="projects-container">
      <div className="projects-title">
        <span>&lt;</span>
        <h2>Projetos</h2>
        <span>&gt;</span>
      </div>

      <div className="project-cards-wrapper">
        {
          filteredRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} imageData={imageData}/>
          ))
        }
      </div>

      {/* <img src={"https://raw.githubusercontent.com/diegonacif/the-planets/main/screenshot.png"} alt="" /> */}
      {/* <img src={imageData[0]?.url} alt="" /> */}
    </section>
  )
}
