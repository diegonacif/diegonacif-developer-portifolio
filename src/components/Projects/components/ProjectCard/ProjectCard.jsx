import '../../../../App.scss'
import placeholderImage from '../../../../assets/placeholder-image.jpg'

export const ProjectCard = ({ repo, imageData }) => {
  const imageDataFiltered = imageData.find((objeto) => objeto.repositoryId === repo.id);
  const imageUrl = imageDataFiltered?.url ? imageDataFiltered?.url : placeholderImage;

  console.log(repo.homepage)

  return (
    <div className="project-card-container">
      <div className="image-wrapper">
        <img src={imageUrl} alt="" id="projectCardScreenshot"/>
      </div>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="buttons-wrapper">
        <button onClick={(e) => {
          e.preventDefault();
          window.open(repo.homepage);
        }}>
          VER O SITE
        </button>
        <button onClick={(e) => {
          e.preventDefault();
          window.open(repo.html_url);
        }}>
          GITHUB
        </button>
      </div>
    </div>
  )
}
