import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import '../../App.scss';

export const Projects = () => {
  const [imageData, setImageData] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const filteredReposList = ['atto-rpg-2', 'kan-do', 'totalink-page', 'pokedex-react', 'frete-facil']

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

  // Embla Carousel
  const carouselRef = useRef(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false
  })

  const [currentScrollSnap, setCurrentScrollSnap] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {    
    if (emblaApi) emblaApi.scrollPrev()  
  }, [emblaApi])

  const scrollNext = useCallback(() => {    
    if (emblaApi) emblaApi.scrollNext()  
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {    
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setCurrentScrollSnap(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {    
    if (emblaApi) {
      emblaApi.on('select', onSelect)  
    } 
  }, [emblaApi, onSelect, loading])

  const currentProgress = ((currentScrollSnap + 1) / emblaApi?.slideNodes().length );

  return (
    <section className="projects-container">
      <motion.div 
        className="progress-bar" 
        style={{ scaleX: currentProgress, transition: 'all 0.3s' }}
      />
      <div className="projects-title">
        <motion.span 
          className={`${!canScrollPrev && 'scroll-button-off'}`}
          onClick={scrollPrev}
          whileInView={{ x: [0, 4, 0], opacity: 1, scale: 1 }} 
          transition={{ repeat: Infinity }}
        >
          &lt;
        </motion.span>
        <motion.h2
          transition={{ duration: 1 }}
          initial={{ opacity: 0, scale: 0.85 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
        >
          Projetos
        </motion.h2>
        <motion.span 
          className={`${!canScrollNext && 'scroll-button-off'}`}
          onClick={scrollNext}
          whileInView={{ x: [-1, -5, -1], opacity: 1, scale: 1 }} 
          transition={{ repeat: Infinity }}
        >
          &gt;
        </motion.span>
      </div>

      <div className="project-cards-wrapper">
        <div className="embla" >   
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {
                filteredRepos.map((repo, index) => (
                  <div className="embla__slide" key={repo.id} ref={carouselRef}>
                    <ProjectCard 
                      repo={repo} 
                      imageData={imageData} 
                      activeCard={currentScrollSnap} 
                      index={index} />
                  </div>
                ))
              }    
            </div>    
          </div>
        </div>
      </div>
    </section>
  )
}
