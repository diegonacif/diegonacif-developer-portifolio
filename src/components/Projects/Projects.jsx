import { Parallax } from "react-scroll-parallax"
import { useEffect, useState } from "react";
import '../../App.scss';
import api from "../../services/api";

export const Projects = () => {
  const [imageData, setImageData] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // console.log(imageData);

  useEffect(() => {
    repositories.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [repositories])

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

  useEffect(() => {
    if( loading === true) {
      console.log("loading")
    } else {
      const fetchImagesFromRepositories = async () => {
        try {
          const imageUrls = [];
    
          for (let i = 0; i < repositories.length; i++) {
            const contentsUrl = repositories[i]?.contents_url;
            const response = await api.get(contentsUrl?.replace("{+path}", ""));
            const contents = response.data;
            const contentsArray = Array.isArray(contents) ? contents : [contents];
    
            const imageFiles = contentsArray.filter((file) => {
              const extensions = [".png", ".jpg", ".jpeg", ".gif"];
              const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
              return extensions.includes(fileExtension);
            });

            for (const image of imageFiles) {
              imageUrls.push({ url: image.download_url, repositoryId: repositories[i].id });
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

  const getScreenshot = (id) => {
    const screenshotObject = imageData.find((item) => item.repositoryId === id);
    return screenshotObject ? screenshotObject.url : null;
    // return console.log(screenshotObject.url)
  };

  getScreenshot(614936534);

  // console.log(getScreenshot(614936534))

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

      <img src={() => getScreenshot(614936534)} alt="" />
    </section>
  )
}
