import '../../App.scss';

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <span>&lt;</span>
        <h2>Sobre mim</h2>
        <span>&gt;</span>
      </div>
      <div className="about-me-text">
        <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
        <p>Nascido em Belém, tenho 34 anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p>
      </div>
      <div className="my-photo" />
    </div>
  )
}
