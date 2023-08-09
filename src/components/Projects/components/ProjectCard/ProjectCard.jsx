import { motion } from 'framer-motion'
import placeholderImage from '../../../../assets/placeholder-image.jpg'
import '../../../../App.scss'

export const ProjectCard = ({ repo, imageData, activeCard, index }) => {
  const imageDataFiltered = imageData.find((objeto) => objeto.repositoryId === repo.id);
  const imageUrl = imageDataFiltered?.url ? imageDataFiltered?.url : placeholderImage;
  const repoTitle = repo.name.charAt(0).toUpperCase() + repo.name.slice(1)

  const isActiveCard = activeCard === index

  return (
    <motion.div 
      className="project-card-container"
      transition={{ duration: 0.3 }}
      animate={
        !isActiveCard ? 
        { scale: 0.85, filter: 'saturate(0.5)', opacity: 0.5 } : 
        { scale: 1, contrast: 1 }
      }
    >
      <div className="background-wrapper">
        <img src={imageUrl} alt="background image" id="projectCardBackground" />
      </div>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src={imageUrl} alt="" id="projectCardScreenshot"/>
        </div>
        <div className="text-wrapper">
          <h2 className="repo-title">{repoTitle}</h2>
          <p>{repo.description}</p>
          <div className="buttons-wrapper">
            <button 
              id="to-site-button"
              onClick={(e) => {
              e.preventDefault();
              window.open(repo.homepage);
            }}>
              VER O SITE
            </button>
            <button 
              id="to-github-button"
              onClick={(e) => {
              e.preventDefault();
              window.open(repo.html_url);
            }}>
              GITHUB
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
