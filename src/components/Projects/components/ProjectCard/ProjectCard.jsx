import '../../../../App.scss'
import placeholderImage from '../../../../assets/placeholder-image.jpg'

export const ProjectCard = ({ repo, imageData }) => {
  const imageDataFiltered = imageData.find((objeto) => objeto.repositoryId === repo.id);
  const imageUrl = imageDataFiltered?.url ? imageDataFiltered?.url : placeholderImage;
  const repoTitle = repo.name.charAt(0).toUpperCase() + repo.name.slice(1)

  console.log(repo.homepage)

  return (
    <div className="project-card-container">
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
    </div>
  )
}
